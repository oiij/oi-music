<script setup lang='ts'>
import { useOGL } from '@oiij/ogl'
import { Color, Mesh, Program, Triangle, Vec3 } from 'ogl'

const props = withDefaults(defineProps<{
  topColor?: string
  bottomColor?: string
  intensity?: number
  sensitivity?: number
  width?: number
}>(), {
  topColor: '#5aeeff',
  bottomColor: '#ff00aa',
  intensity: 1.0,
  sensitivity: 0.5,
  width: 0.2,
})

const playerStore = usePlayerStore()
const { renderer, gl, onLoop, onResize } = useOGL(useTemplateRef('dom-ref'), { disableRender: true })

const vert = /* glsl */ `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0, 1);
  }
`

const frag = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform vec3 uResolution;
  uniform vec2 uMouse;
  uniform vec3 uTopColor;
  uniform vec3 uBottomColor;
  uniform float uIntensity;
  uniform bool uInteractive;
  uniform float uGlowAmount;
  uniform float uPillarWidth;
  uniform float uPillarHeight;
  uniform float uNoiseIntensity;
  uniform float uPillarRotation;
  varying vec2 vUv;

  const float PI = 3.141592653589793;
  const float EPSILON = 0.001;
  const float E = 2.71828182845904523536;
  const float HALF = 0.5;

  mat2 rot(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat2(c, -s, s, c);
  }

  // Procedural noise function
  float noise(vec2 coord) {
    float G = E;
    vec2 r = (G * sin(G * coord));
    return fract(r.x * r.y * (1.0 + coord.x));
  }

  // Apply layered wave deformation to position
  vec3 applyWaveDeformation(vec3 pos, float timeOffset) {
    float frequency = 1.0;
    float amplitude = 1.0;
    vec3 deformed = pos;

    for(float i = 0.0; i < 4.0; i++) {
      deformed.xz *= rot(0.4);
      float phase = timeOffset * i * 2.0;
      vec3 oscillation = cos(deformed.zxy * frequency - phase);
      deformed += oscillation * amplitude;
      frequency *= 2.0;
      amplitude *= HALF;
    }
    return deformed;
  }

  // Polynomial smooth blending between two values
  float blendMin(float a, float b, float k) {
    float scaledK = k * 4.0;
    float h = max(scaledK - abs(a - b), 0.0);
    return min(a, b) - h * h * 0.25 / scaledK;
  }

  float blendMax(float a, float b, float k) {
    return -blendMin(-a, -b, k);
  }

  void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    uv.x *= uResolution.z;

    // Apply 2D rotation to UV coordinates
    float rotAngle = uPillarRotation * PI / 180.0;
    uv *= rot(rotAngle);

    vec3 origin = vec3(0.0, 0.0, -10.0);
    vec3 direction = normalize(vec3(uv, 1.0));

    float maxDepth = 50.0;
    float depth = 0.1;

    mat2 rotX = rot(uTime * 0.3);
    if(uInteractive && length(uMouse) > 0.0) {
      rotX = rot(uMouse.x * PI * 2.0);
    }

    vec3 color = vec3(0.0);

    for(float i = 0.0; i < 100.0; i++) {
      vec3 pos = origin + direction * depth;
      pos.xz *= rotX;

      // Apply vertical scaling and wave deformation
      vec3 deformed = pos;
      deformed.y *= uPillarHeight;
      deformed = applyWaveDeformation(deformed + vec3(0.0, uTime, 0.0), uTime);

      // Calculate distance field using cosine pattern
      vec2 cosinePair = cos(deformed.xz);
      float fieldDistance = length(cosinePair) - 0.2;

      // Radial boundary constraint
      float radialBound = length(pos.xz) - uPillarWidth;
      fieldDistance = blendMax(radialBound, fieldDistance, 1.0);
      fieldDistance = abs(fieldDistance) * 0.15 + 0.01;

      vec3 gradient = mix(uBottomColor, uTopColor, smoothstep(-2.0, 2.0, pos.y));
    color += gradient * (0.02 / (fieldDistance * fieldDistance + 0.001));

      if(fieldDistance < EPSILON || depth > maxDepth) break;
      depth += fieldDistance;
    }

    // Normalize by pillar width to maintain consistent glow regardless of size
    float widthNormalization = uPillarWidth / 3.0;
    
    // Manual tanh approximation for WebGL 1.0 compatibility
    vec3 x = color * uGlowAmount / widthNormalization;
    vec3 exp2x = exp(2.0 * x);
    color = (exp2x - 1.0) / (exp2x + 1.0);

    // Add noise postprocessing
    float rnd = noise(gl_FragCoord.xy);
    color -= rnd / 15.0 * uNoiseIntensity;

    gl_FragColor = vec4(color * uIntensity, 1.0);
  }
`

const geometry = new Triangle(gl)
const program = new Program(gl, {
  vertex: vert,
  fragment: frag,
  uniforms: {
    uTime: { value: 0 },
    uResolution: { value: new Vec3(0, 0, 0) },
    uMouse: { value: new Vec3(0, 0, 0) },
    uTopColor: { value: new Color(props.topColor) },
    uBottomColor: { value: new Color(props.bottomColor) },
    uIntensity: { value: props.intensity },
    uInteractive: { value: false },
    uGlowAmount: { value: 0.15 },
    uPillarWidth: { value: props.width },
    uPillarHeight: { value: 1.0 },
    uNoiseIntensity: { value: 0.5 },
    uPillarRotation: { value: 0.0 },
  },
})

const mesh = new Mesh(gl, { geometry, program })

onResize(({ width, height, aspect, dpr }) => {
  program.uniforms.uResolution.value.set(width * dpr, height * dpr, aspect)
})

watchEffect(() => {
  program.uniforms.uTopColor.value.set(props.topColor)
  program.uniforms.uBottomColor.value.set(props.bottomColor)
})

onLoop((_, { timestamp }) => {
  // Debug: 验证渲染管线是否工作

  program.uniforms.uTime.value = timestamp * 0.001

  const frequencyData = playerStore.getFrequencyData()
  if (frequencyData.length > 0) {
    // 计算低频平均值 (Bass)
    let bassSum = 0
    const bassLimit = Math.min(frequencyData.length / 4, 30)
    for (let i = 0; i < bassLimit; i++) {
      bassSum += frequencyData[i]
    }
    const bassAvg = bassSum / bassLimit / 255.0

    // 计算整体平均值
    let totalSum = 0
    for (let i = 0; i < frequencyData.length; i++) {
      totalSum += frequencyData[i]
    }
    const totalAvg = totalSum / frequencyData.length / 255.0

    // 动态调整 Uniforms
    // 强度随整体音量波动
    program.uniforms.uIntensity.value = props.intensity + totalAvg * props.sensitivity * 2.0
    // 光柱宽度随低频波动 (Bass kick)
    program.uniforms.uPillarWidth.value = props.width + bassAvg * props.sensitivity * 0.5
    // 辉光量随高频或整体波动
    program.uniforms.uGlowAmount.value = 0.15 + totalAvg * props.sensitivity * 0.1
  }
  else {
    // 恢复默认值
    program.uniforms.uIntensity.value = props.intensity
    program.uniforms.uPillarWidth.value = props.width
  }

  renderer.render({ scene: mesh })
})
</script>

<template>
  <div ref="dom-ref" class="h-100 w-100" />
</template>

<style scoped>

</style>

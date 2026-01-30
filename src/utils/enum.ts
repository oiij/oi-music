function map2Enum<T extends { value: any, label: string }>(map: readonly T[]) {
  return Object.fromEntries(map.map(item => [item.value, item.label])) as Record<T['value'], T['label']>
}

export const SearchTypeMaps = [
  {
    value: '1018',
    label: '综合',
  },
  {
    value: '1',
    label: '单曲',
  },
  {
    value: '1000',
    label: '歌单',
  },
  {
    value: '10',
    label: '专辑',
  },
  {
    value: '100',
    label: '歌手',
  },
  {
    value: '1002',
    label: '用户',
  },
  {
    value: '1004',
    label: 'MV',
  },
  {
    value: '1006',
    label: '歌词',
  },
  {
    value: '1009',
    label: '电台',
  },
  {
    value: '1014',
    label: '视频',
  },
  {
    value: '2000',
    label: '声音',
  },
] as const
export const SearchTypeEnum = map2Enum(SearchTypeMaps)

export const SongQualityMaps = [
  {
    value: '999000',
    label: 'MAX',
  },
  {
    value: '320000',
    label: '320k',
  },
  {
    value: '192000',
    label: '192k',
  },
  {
    value: '128000',
    label: '128k',
  },
  {
    value: '64000',
    label: '64k',
  },
] as const
export const SongQualityEnum = map2Enum(SongQualityMaps)

export const SongQualityLevelMaps = [
  {
    value: 'standard',
    label: '标准',
  },
  {
    value: 'higher',
    label: '较高',
  },
  {
    value: 'exhigh',
    label: '极高',
  },
  {
    value: 'lossless',
    label: '无损',
  },
  {
    value: 'hires',
    label: 'Hi-Res',
  },
  {
    value: 'jyeffect',
    label: '高清环绕声',
  },
  {
    value: 'sky',
    label: '沉浸环绕声',
  },
  {
    value: 'dolby',
    label: '杜比全景声',
  },
  {
    value: 'jymaster',
    label: '超清母带',
  },
] as const
export const SongQualityLevelEnum = map2Enum(SongQualityLevelMaps)

export const PlayModeMaps = [
  {
    value: 'sequence',
    label: '顺序播放',
  },
  {
    value: 'loop',
    label: '列表循环',
  },
  {
    value: 'random',
    label: '随机播放',
  },
  {
    value: 'single',
    label: '单曲循环',
  },
] as const
export const PlayModeEnum = map2Enum(PlayModeMaps)

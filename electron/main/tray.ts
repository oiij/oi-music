import { BrowserWindow, nativeImage, Tray } from 'electron'
import icon from '../../resources/oi-logo.png?asset'

export function createTray() {
  const tray = new Tray(nativeImage.createFromPath(icon))
  tray.setToolTip('OI Music')

  tray.on('click', () => {
    BrowserWindow.getAllWindows().forEach((window) => {
      window.show()
    })
  })
  return tray
}

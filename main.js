const { app, BrowserWindow } = require('electron')
const log = require('electron-log');
const {autoUpdater} = require("electron-updater");

log.transports.file.resolvePath = () => path.join('C:\Kramer-Control\Electron\auto-update-electron', '/logs/main.log');

log.info('Hello, log');
log.warn('Some problem appears');
let win;
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
    autoUpdater.checkForUpdatesAndNotify();
})

autoUpdater.on("update-available", ()=>{
    log.info("update-available");
})

autoUpdater.on("checking-for-update", ()=>{
    log.info("checking-for-update");
})

autoUpdater.on("download-progress", ()=>{
    log.info("download-progress");
})

autoUpdater.on("update-downloaded", ()=>{
    log.info("update-downloaded");
})
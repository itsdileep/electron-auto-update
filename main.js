const { app, BrowserWindow } = require('electron')
const log = require('electron-log');
const {autoUpdater} = require("electron-updater");

log.transports.file.resolvePath = () => path.join('C:\Kramer-Control\Electron\auto-update-electron', '/logs/main.log');
log.log("Application Version = " + app.getVersion());
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

autoUpdater.on("checking-for-update", ()=>{
    log.info("checking-for-update");
})

autoUpdater.on("update-available", (info)=>{
    log.info("update-available" + info);
})

autoUpdater.on("update-not-available", (info)=>{
    log.info("update-not-available" + info);
})

autoUpdater.on("error", (err)=>{
    log.info("Error in autoupdater." + err);
})

autoUpdater.on("download-progress", (progressTrack)=>{
    log.info("download-progress");
    log.info(progressTrack);
})

autoUpdater.on("update-downloaded", ()=>{
    log.info("update-downloaded");
})
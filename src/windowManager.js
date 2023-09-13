const { BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { readConfig, saveConfig } = require('./config');

class WindowManager {
    constructor() {
        this.mainWindow = null;
        this.configWindow = null;
    }

    hasNoLiveWindow() {
        return this.mainWindow == null && this.configWindow == null
    }

    createMainWindow() {
        this.mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true
            }
        });

        this.mainWindow.loadURL('https://chat.openai.com');

        // 读取配置
        const { proxyAddress, proxyPort } = readConfig();
        // 根据配置执行相应的操作，例如设置代理等
        if (proxyAddress && proxyPort) {
            console.log("access with proxy: ", proxyAddress, proxyPort);
            this.mainWindow.webContents.session.setProxy({
                proxyRules: `socks5://${proxyAddress}:${proxyPort}`,
                proxyBypassRules: '<local>'
            });
        }

        let this_ = this
        this.mainWindow.on('closed', function () {
            this_.mainWindow = null;
        });
        return this.mainWindow
    }

    createConfigWindow() {
        this.configWindow = new BrowserWindow({
            width: 600,
            height: 400,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
            }
        });

        this.configWindow.loadFile(path.join(__dirname, 'config.html'));
        // 监听渲染进程发送的读取配置信息请求
        ipcMain.on('read-config', (event) => {
            let config = readConfig()
            console.log('config: ', config);
            event.reply('read-config-reply', { config });
        });

        // 监听渲染进程发送的写入配置信息请求
        ipcMain.on('write-config', (event, configData) => {
            saveConfig(configData)
            event.reply('write-config-reply', { success: true });
        });

        let this_ = this
        this.configWindow.on('closed', function () {
            this_.configWindow = null;
        });
        return this.configWindow;
    }

}

module.exports = WindowManager;

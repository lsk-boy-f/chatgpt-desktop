const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const { readConfig, saveConfig } = require('./config');

let configWindow;
let mainWindow;

function createConfigWindow() {
    configWindow = new BrowserWindow({
        width: 600,
        height: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    configWindow.loadFile(path.join(__dirname, 'config.html'));
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

    configWindow.on('closed', function () {
        configWindow = null;
    });
    return configWindow;
}

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL('https://ai.com');

    // 读取配置
    const { proxyAddress, proxyPort } = readConfig();
    // 根据配置执行相应的操作，例如设置代理等
    if (proxyAddress && proxyPort) {
        console.log("access with proxy: ", proxyAddress, proxyPort);
        mainWindow.webContents.session.setProxy({
            proxyRules: `socks5://${proxyAddress}:${proxyPort}`,
            proxyBypassRules: '<local>'
        });
    }

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
    return mainWindow
}

module.exports = { createConfigWindow, createMainWindow};

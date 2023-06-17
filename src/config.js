const { app, BrowserWindow, Menu, ipcMain } = require('electron');

const path = require('path');
const fs = require('fs');

const configFilePath = path.join(app.getPath('userData'), 'config.json');
console.log(configFilePath);

function readConfig() {
    // 从配置文件读取配置并填写到页面上
    checkConfig();

    let configData
    try {
        configData = JSON.parse(fs.readFileSync(configFilePath, 'utf-8'));
    } catch (error) {
        console.error('读取配置文件失败:', error);
        configData = { proxyAddress: "", proxyPort: "" }
    }

    return { ...configData, configFilePath: configFilePath }
}

function checkConfig() {

    // 判断文件是否存在
    if (!fs.existsSync(configFilePath)) {
        // 获取文件所在目录路径
        const directory = path.dirname(configFilePath);

        // 创建目录及子目录（如果不存在）
        fs.mkdirSync(directory, { recursive: true });

        // 创建文件并写入内容
        fs.writeFileSync(configFilePath, JSON.stringify({
            proxyAddress: "", proxyPort: ""
        }));
        console.log('文件创建成功并写入内容');
    } else {
        console.log('文件已存在');
    }
}

function saveConfig(config) {
    checkConfig()
    fs.writeFileSync(configFilePath, JSON.stringify(config));
}

module.exports = { readConfig, saveConfig };

# ChatGPT Desktop

ChatGPT Desktop 是一个桌面应用程序，用于以桌面程序的方式访问 ChatGPT 网页。它是对 ChatGPT 网页的一个包装。使用 Electron 构建，提供了一个用户友好的界面。
For english is [here](./README_eng.md)

## 功能特点

- 连接到 ChatGPT API，生成用户输入的响应。
- 提供类似聊天界面的交互方式，方便与模型进行通信。
- 支持自定义 SOCKS5 代理设置。
- 允许配置自动启动行为。
- 将配置设置持久化到本地文件中。

## 安装

### 前提条件

- Node.js（版本 12 或更高）

### 克隆仓库

```shell
git clone https://github.com/your-username/chatgpt-desktop.git
```
### 安装依赖
```shell
cd chatgpt-desktop
npm install
```
### 构建和运行应用程序
```shell
cd chatgpt-desktop
npm start
```

## 配置
可以从应用程序的"File"菜单中访问配置设置。配置文件存储在以下位置：
```shell
~/Library/Application\ Support/chatgpt-desktop/config.json
```
当您首次运行应用程序时，会自动创建配置文件。它包含以下选项：
- `proxyAddress`: SOCKS5代理服务器的地址。
- `proxyPort`: SOCKS5代理服务器的端口号。
- `autoStart`：应用程序是否应在系统启动时自动启动。

## 贡献
欢迎贡献！如果您发现任何问题或想要为项目做出贡献，请随时提交拉取请求。

## 许可证
本项目基于MIT许可证。更多信息请参见LICENSE文件，

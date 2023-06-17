# ChatGPT Desktop

ChatGPT Desktop is a desktop application that serves as a wrapper for the ChatGPT web page. It allows convenient access to ChatGPT in the form of a desktop program. It is built using Electron and provides a user-friendly interface. 中文版本在[这里](./README.md).

## Features

- Connects to the ChatGPT API to generate responses to user input.
- Provides a chat-like interface for easy communication with the model.
- Supports customization of SOCKS5 proxy settings.
- Allows configuration of auto-start behavior.
- Persists configuration settings to a local file.

## Installation

### Prerequisites

- Node.js (version 12 or later)

### Clone the Repository

```shell
git clone https://github.com/your-username/chatgpt-desktop.git

```

### Install Dependencies

```shell
cd chatgpt-desktop
npm install
```
### Build and Run the Application

```shell
cd chatgpt-desktop
npm install
```

## Configuration
The configuration settings can be accessed from the "File" menu in the application. The configuration file is stored in the following location:

```shell
~/Library/Application\ Support/chatgpt-desktop/config.json
```

The configuration file is automatically created when you run the application for the first time. It contains the following options:

- `proxyAddress`: The address of the SOCKS5 proxy server.
- `proxyPort`: The port number of the SOCKS5 proxy server.
- `autoStart`: Whether the application should start automatically on system startup.


## Contributing
Contributions are welcome! If you find any issues or want to contribute to the project, please feel free to submit a pull request.


## License
This project is licensed under the MIT License. See the LICENSE file for more information.


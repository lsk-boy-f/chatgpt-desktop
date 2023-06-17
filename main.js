const { app } = require('electron');
const { createMainWindow} = require('./app');
const { buildMenu } = require('./menu');


app.on('ready', () => {
  let mainWindow = createMainWindow();
  
  buildMenu(mainWindow);
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (configWindow === null && mainWindow === null) {
    createMainWindow();
  }
});

const { app } = require('electron');
const { buildMenu } = require('./menu');
const WindowManager = require('./windowManager');
const MenuBuilder = require('./menu');

const windowManager = new WindowManager()
const menuBuilder = new MenuBuilder(windowManager)

app.on('ready', () => {
  windowManager.createMainWindow();
  
  menuBuilder.buildMenu();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if(windowManager.hasNoLiveWindow()){
    windowManager.createMainWindow();
  }
});

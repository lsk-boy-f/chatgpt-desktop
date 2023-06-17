const { ipcRenderer } = require('electron');

// 向主进程发送消息以存储数据
function setItem(key, value) {
  ipcRenderer.send('store-data', { key, value });
}

// 向主进程发送消息以获取数据
function getItem(key) {
  return new Promise((resolve, reject) => {
    ipcRenderer.send('retrieve-data', key);
    ipcRenderer.once('data-retrieved', (event, data) => {
      resolve(data);
    });
  });
}

// 示例用法
setItem('myKey', 'myValue');
getItem('myKey').then((value) => {
  console.log(value); // 输出: myValue
});

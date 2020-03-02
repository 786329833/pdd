const { app, BrowserWindow } = require('electron');
function initWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });
  win.loadURL('http://localhost:4200');
}

app.on('ready', initWindow);

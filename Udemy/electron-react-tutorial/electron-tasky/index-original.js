const path = require('path');
const url = require('url');
const electron = require('electron');
const positioner = require('electron-traywindow-positioner');

const {
  app,
  BrowserWindow,
  Tray
} = electron;

let mainWindow;
let tray;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 500,
    width: 300,
    frame: false,
    resizable: false,
    show: false
  });
  // mainWindow.loadURL(`file://${__dirname}/src/index.html`);
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'src', 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);
  tray = new Tray(iconPath);

  tray.on('click', (event, bounds) => {
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      positioner.position(mainWindow, bounds);
      // positioner.position(mainWindow, tray);
      mainWindow.show();
    }
  });
});

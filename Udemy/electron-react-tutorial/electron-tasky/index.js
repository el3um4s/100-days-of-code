const path = require('path');
const url = require('url');
const electron = require('electron');
const TimerTray = require('./app/timer_tray');
const MainWindow = require('./app/main_window');

const {
  app,
  ipcMain
} = electron;

let mainWindow;
let tray;
let enotify;

app.on('ready', () => {
  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);

  mainWindow = new MainWindow(url.format({
    pathname: path.join(__dirname, 'src', 'index.html'),
    protocol: 'file:',
    slashes: true
  }), iconPath);

  tray = new TimerTray(iconPath, mainWindow);

  enotify = require('electron-notify');

  enotify.setConfig({
    displayTime: 500
  });
});

ipcMain.on('update-timer', (event, timeLeft) => {
  enotify.notify({
    title: 'Tasky',
    text: timeLeft
  });
  console.log(timeLeft);
});

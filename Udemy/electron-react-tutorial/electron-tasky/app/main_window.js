const electron = require('electron');

const {
  BrowserWindow
} = electron;

class MainWindow extends BrowserWindow {
  constructor(url, iconPath) {
    super({
      height: 500,
      width: 300,
      frame: false,
      resizable: false,
      show: false,
      icon: iconPath,
      skipTaskbar: true,
      webPreferences: {
        backgroundThrottling: false
      }
    });

    this.loadURL(url);
    this.on('blur', this.onBlur.bind(this));
  }

  onBlur() {
    this.hide();
  }

}

module.exports = MainWindow;

'use strict';

const electron = require('electron');
const positioner = require('electron-traywindow-positioner');

const {
  app,
  Tray,
  Menu
} = electron;

class TimerTray extends Tray {
  constructor(iconPath, mainWindow) {
    super(iconPath);
    this.mainWindow = mainWindow;
    //this.showMenu();

    if (process.platform === 'darwin' || process.platform === 'win32') {
      this.setToolTip('Timer App');
      this.on('click', this.onClick.bind(this));
      this.showMenuExit();
    } else {
      this.showMenu();
    }

    //this.on('right-click', this.onRightClick.bind(this));
  }

  onClick(event, bounds) {
    if (this.mainWindow.isVisible()) {
      this.mainWindow.hide();
    } else {
      positioner.position(this.mainWindow, bounds);
      this.mainWindow.show();
    }
  }

showMenu() {
    const mainWindow = this.mainWindow;
    const trayMenu = Menu.buildFromTemplate([{
        label: 'Toggle',
        click(itemMenu) {
          if (mainWindow.isVisible()) {
            mainWindow.hide();
          } else {
            positioner.position(mainWindow, itemMenu);
            mainWindow.show();
          }
        }
      },
      {
        label: 'Quit',
        click: () => app.quit()
      }
    ]);

    this.setContextMenu(trayMenu);
  }

  showMenuExit() {
    const trayMenu = Menu.buildFromTemplate([
      {
        label: 'Quit',
        click: () => app.quit()
      }
    ]);

    this.setContextMenu(trayMenu);
  }

}

module.exports = TimerTray;

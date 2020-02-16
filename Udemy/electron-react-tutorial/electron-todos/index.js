const electron = require('electron');

const path = require('path');
const url = require('url');

const {
  app,
  BrowserWindow,
  Menu,
  ipcMain
} = electron;

let mainWindow;
let addWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'main.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.on('closed', () => app.quit());

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

function createAddWindow() {
  addWindow = new BrowserWindow({
    show: false,
    parent: mainWindow,
    width: 400,
    height: 200,
    title: 'Add New Todo',
    center: true,
    skipTaskbar: true,
    autoHideMenuBar: true
  });
  addWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'add.html'),
    protocol: 'file:',
    slashes: true
  }));
  // per evitare di mostrare la finestra prima che sia completamente pronta
  addWindow.once('ready-to-show', () => {
    addWindow.show();
  });
  addWindow.on('closed', () => {
    addWindow = null;
  });
}

ipcMain.on('todo:add', (event, todo) => {
  mainWindow.webContents.send('todo:add', todo);
  addWindow.close();
});

const menuTemplate = [{
  label: '&File',
  submenu: [{
      label: 'New Todo',
      accelerator: 'Ctrl+N',
      click() {
        createAddWindow();
      }
    },
    {
      label: 'Clear Todos',
      click() {
        mainWindow.webContents.send('todo:clear');
      }
    },
    {
      label: 'Quit',
      accelerator: acceleratore('Command+Q', 'Ctrl+Q'),
      click() {
        app.quit();
      }
    }
  ]
}];

// un menù vuoto da mostrare solo sotto OSX
if (process.platform === 'darwin') {
  menuTemplate.unshift({});
}

// un menù con tools utili per il debug
// da usare solamente quando non si è nella release in distribuzione
if (process.env.NODE_ENV !== 'production') {
  menuTemplate.push({
    label: '&DEBUG',
    submenu: [{
        label: 'Strumenti per sviluppatori',
        accelerator: acceleratore('Command+Alt+I', 'Ctrl+Shift+I'),
        click(menuItem, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      },
      {
        type: 'separator'
      },
      {
        role: 'reload'
      },
      {
        role: 'forcereload'
      }
    ]
  });
}

// scrivo una funzione personale per gestire i diversi comandi tra OS
function acceleratore(osX, win) {
  return process.platform === 'darwin' ? osX : win;
}

//accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',

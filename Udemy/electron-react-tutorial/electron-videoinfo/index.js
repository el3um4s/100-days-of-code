const electron = require('electron');
const path = require('path');
const url = require('url');

const ffmpeg = require('fluent-ffmpeg');

// const { app } = electron;
// const { app, BrowserWindow } = electron;
const {
  app,
  BrowserWindow,
  ipcMain
} = electron;

let mainWindow;

app.on('ready', () => {
  // console.log(`L'app è pronta`);
  // new BrowserWindow({});
  //const mainWindow = new BrowserWindow({});

  mainWindow = new BrowserWindow({
    width: 750,
    height: 750,
    center: true,
    title: "Video Info",
    icon: path.join(__dirname, '/icons/png/64x64.png')
  });

  mainWindow.on('closed', function() {
    mainWindow = null;
  })

  mainWindow.setMenu(null);
  //mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
})

app.on('window-all-closed', function() {
  app.quit()
});

ipcMain.on('video:submit', (event, videoPath) => {
  ffmpeg.ffprobe(videoPath, (err, metadata) => {
    //console.log('Video druation is:',  metadata.format.duration);
    const {
      filename,
      format_long_name,
      duration,
      size
    } = metadata.format;
    const {
      codec_type,
      codec_name,
      width,
      height,
      display_aspect_ratio,
      avg_frame_rate
    } = metadata.streams[0];

    const shortFilename = path.win32.basename(filename);

    mainWindow.webContents.send('video:metadata', {
      shortFilename,
      format_long_name,
      duration,
      size,
      codec_type,
      codec_name,
      width,
      height,
      display_aspect_ratio,
      avg_frame_rate
    });
  });
});

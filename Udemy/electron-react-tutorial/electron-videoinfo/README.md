# Video Info

Un modo semplice per vedere le informazioni fondamentali di un file video.

Scarica per
  * [Windows (Portable - 64bit)](http://stranianelli.com/app/videoinfo/VideoInfo1.0.0.exe) (34 MB)
  * [Linux (deb - 64bit)](http://stranianelli.com/app/videoinfo/videoinfo_1.0.0_amd64.deb) (35 MB)

![Video Info](https://raw.githubusercontent.com/el3um4s/electron-videoinfo/master/materialeVario/screenshot.png)

## Cos'è?

**Video Info** è il primo progetto del corso [Electron for Desktop Apps](https://www.udemy.com/electron-react-tutorial/) di [Stephen Grider](https://twitter.com/ste_grider).

Tramite il pulsante

> Scegli un video

si seleziona un file video dal proprio pc. Poi con

> Ottieni informazioni

si hanno un po' di dati sul video selezionato.

**Lo scopo** del progetto è imparare l'utilizzo di

- ipcRenderer.send
- ipcMain.on
- mainWindow.webContents.send
- ipcRenderer.on

## Problemi Conosciuti

**Tipo di file**

L'app in alcuni sistemi ha problemi a visualizzare correttamente i file video nella finestra `Scegli un video`. In questo caso è sufficiente selezionare `Mostra tutti i tipi`.

**ffmpeg.ffprobe**

Per funzionare correttamente deve essere installato [ffmpeg](https://www.ffmpeg.org/) sul proprio PC.

> `NOTA` Lo scopo dell'esercizio non è (era) ottenere un file eseguibile, quindi non mi sono preoccupato di capire come risolvere questo problema.

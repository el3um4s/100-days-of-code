# "Installare" Electron

Mi metto con il terminale nella cartella dove voglio _installare_ Electron. In questo caso si chiama `electron-videoinfo`.

Scrivo

> npm init

Alle richieste rispondo sempre di Sì (per il momento).

Questo crea il file **package.json** dove sono salvate le informazioni per fare partire Electron, l'elenco delle librerie che servono e altre cose ancora.

Scrivo

> npm install --save-dev electron

per scaricare la cartella **node_modules** nella cartella del progetto.

**NOTE**

Se voglio installare tutte le dipendenze di un progetto lo posso fare tramite il comando

> npm install

In questo modo nodejs prende l'elenco dal file _package.json_ e scarica i moduli necessari dentro _node_modules_.

Invece per aggiornare i moduli già installati all'ultima version rilasciata dallo sviluppatore usare:

```javascript
npm update    // nella stessa cartella di package.json
npm outdated  // se non restituisce nessun risultato allora è tutto aggiornato
```

# index.js

Creo il file **index.js** nella stessa cartella di _package.json_.

All'inizio Scrivo

```javascript
const electron = require('electron');
```

per dire al file di utilizzare electron.

Poi creo la costante `app`:

```javascript
const { app } = electron;
```

da usare per chiamare i vari metodi collegati ad Electron.

Usando la costante `app` imposto un metodo per fare qualcosa quando l'app (Electron) è pronta,

```javascript
app.on('ready', ()=> {
  console.log(`L'app è pronta!`);
});
```

Alla fine il file `package.json` è come questo

```javascript
const electron = require('electron');

const { app } = electron;

app.on('ready',()=>{
  console.log(`L'app è pronta`);
});
```

# package.json

Adesso torno sul file _package.json_ e modifico il pezzo `scripts`.

Da così:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

diventa così

```json
"scripts": {
  "electron": "electron ."
}
```

**IMPORTANTE**

Il punto di `electron .`va messo!

# Eseguo l'app

Da terminale scrivo

> npm run electron

Sul terminale adesso viene scritto

> L'app è pronta

Non appare ancora nessuna finestra perché non è stata ancora passata ancora nessuna informazione ad Electron.

Per chiudere l'app e non lasciarla andare in background premere `CTRL+C`

**Nota** Ogni informazione utile al debug e i comandi `console.log()` vengono mostrati nel terminale.

# Mostrare una finestra

Per mostrare una finestra mi serve un'altra proprietà di Electron, `BrowserWindow`. Per utilizzarla cambio la riga dell'`index.js` da così

```javascript
const { app } = electron;
```

a così

```javascript
const { app, BrowserWindow } = electron;
```

Poi aggiungo nella funzione `on('ready')` un nuovo oggetto _BrowserWindow_:

```javascript
new BrowserWindow({});
```

Per il momento non passo nessun parametro, però è possibile personalizzare la finestra. Inoltre, semplicemente creando l'oggetto _BrowserWindow_ si apre una nuova finestra.

Il file `index.js` è adesso così:

```javascript
const electron = require('electron');

const { app, BrowserWindow } = electron;

app.on('ready',()=>{
  new BrowserWindow({});
});
```

Se da terminale digito

> npm run electron

adesso appare un'app eseguito su una finestra: Urrah!

# index.html

Passo ora a creare il file `index.html`:

```html
<head>
</head>
<body>
  <h1>Video Info</h1>
</body>
```

Per il momento è una pagina molto semplice.

Adesso modifico ancora una volta il file `index.js`.

```javascript
 app.on('ready',()=>{
   // new BrowserWindow({}); trasformo questa riga in modo da avere una costante su cui lavorare

   // creo la finestra dell'app e la assegno alla const mainWindow
   const mainWindow = new BrowserWindow({});

   // con il metodo loadURL passo l'url della pagina aprire
   // questo metodo usa un solo argomento, e può essere un qualsiasi url

   mainWindow.loadURL(`file://${__dirname}/index.html`);
 });
```

Se da terminale digito

> npm run electron

adesso appare un'app che mostra il file index.html.

# index.html (2)

Appurato che funziona è il momento di continuare a modificare il file `index.html` aggiungendo un form per chiedere il viedo da analizzare e avviare l'analisi.

```html
<form>
  <div>
    <label>Select a video</label>
    <input type="file" accept="video/*" />
  </div>
  <button type="submit">Get Info</button>
</form>
```

Dentro il body della pagina aggiungo una funzione javascript

```javascript
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  //debugger    NOTA: il comando debugger serve per bloccare l'esecuzione del codice in questa posizione
  const file = document.querySelector('input').files[0];
});
```

# ffmpeg e fluent-ffmpeg

Per poter leggere la lunghezza del video occorre utilizzare una libreria esterna, ffmpeg. Anzi, fluent-ffmpeg che è pensata per l'utilizzo con javascript ed Electron.

`Note` Installare prima ffmpeg sul pc.

Da terminale digitare

> npm install --save fluent-ffmpeg

E' buona norma tenere tutte le cose relative ad Electron sull'app (ovvero sul file index.js). Questo però pone il problema di come far comunicare la finestra (il processo in esecuzione nella finestra) con l'app in sè. Per riuscirci occorre creare un Inter-Process Communication tra app e mainWindow. Quindi nel file index.html scrivo

```javascript
const electron = require('electron');
const { ipcRenderer } = electron;
```

La proprietà `ipcRenderer` è quella che permette di comunicare tra la finestra del browse e l'app di Electron.

Per _spedire_ l'indirizzo del viddeo (path) all'app electron uso la funzione `ipcRenderer.send(nomeIdentificativo, dati);`

```javascript
ipcRenderer.send('video:submit', path);
```

Il `nomeIdentificativo` può essere una qualsiasi stringa (videoSpedito, video-spedito, videoSpedito, ecc...): l'importante è che sia facile riconoscere cosa fa (serve per il Me Futuro).

La variabile `path` è data da:

```javascript
const { path } = document.querySelector('input').files[0];
```

Infatti, in questo progetto, serve solo l'indirizzo del file video, non tutte le informazioni: conviene quindi salvare nella variabile solamente la proprietà _path_ dell'oggetto caricato dalla form.

# ipcRenderer.send, ipcMain.on, mainWindow.webContents.send, ipcRenderer.on

Per comunicare tra Electron App e mainWindow si utilizzano 4 comandi diversi:

(<https://raw.githubusercontent.com/el3um4s/electron-videoinfo/master/materialeVario/comeFunzionaIPCtraMainEApp.png>)

Aggiungo `ipcMain` a `index.js`

```javascript
const { app, BrowserWindow, ipcMain } = electron;
```

e quindi creo la funzione per intercettare l'arrivo del _dato_ da mainWindow

```javascript
ipcMain.on('video:submit', (event, path) => {
  // ...
});
```

Il primo parametro è il nome dell'evento da intercettare, i parametri della funzione invece sono sempre 2:

1. il primo è `event`: contiene informazioni che permettono di capire, per esempio, da quale finestra arriva il dato. E' utile nel caso di programmi con più finestre in esecuzione contemporaneamente.
2. il secondo è il dato effettivamente passato dalla finestra all'app (in questo caso è la `path` del viedo)

Dopo aver ricavato la durata del video la rispedisco alla finestra con il comando

```javascript
  mainWindow.webContents.send('video:metadata',metadata.format.duration);
```

Però per far funzionare `mainWindow` fuori dalla funzione in cui è stata dichiarata occorre camnbiare leggermente `app.on()`:

```javascript
// agiungo let mainWindow; fuori da tutte le funzioni

let mainWindow;

app.on('ready',()=>{
  // tolgo const  
  // const mainWindow = new BrowserWindow({});
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(url.format({
    //...
  }))
});
```

Infine aggiungo una funzione per ricevere il dato spedito dall'app.

```javascript
ipcRenderer.on('video:metadata', (event, duration) => {
  // ...
});
```

# Cambiamenti

Ho spostato electron da `dependencies` a `devDependencies`; in più ho cambiato la licenza da `ISC`a `CC-BY-4.0`.

Ho aggiunto

```javascript
app.on('ready', () => {
  // ...
    mainWindow.on('closed', function() {
      mainWindow = null;
    })
  });
```

e

```javascript
app.on('window-all-closed', function() {
  app.quit()
});
```

per chiudere completamente l'app quando la finestra viene chiusa.

# Creare file di installazione ed eseguibili

Per creare file eseguibili utilizzo [Electron Builder](https://github.com/electron-userland/electron-builder) (vedi [questo Medium](https://medium.com/how-to-electron/a-complete-guide-to-packaging-your-electron-app-1bdc717d739f)).

Quindi lo installo tramite

> npm install electron-builder --save-dev

Poi creo una cartella `build` dentro cui inserisco due file:

1. icon.icns
2. icon.ico che serviranno per aggiungere l'icona al programma.

Per usare `electron-builder` devo inserire la proprietà `build` nel file _package.json_.

```javascript
"build": {
  "appId": "com.stranianelli.videoinfo",  // serve per identficare l'app dalle altre
  "productName": "Video Info", // nome più bello da vedere
  "copyright": "Copyright © year Strani Anelli", // copyright per umani
  "linux": {
    "target": ["deb"]
  },
  "win": {
    "target": "portable",
    "icon": "build/icon.ico"
  }
}
```

Poi per ogni sistema operativo (di cui mi interessa creare il file eseguibile), aggiungo (dentro `build`):

```json
"linux": {
  "target": [
    "deb"
  ]
},
"win": {
  "target": "portable",
  "icon": "build/icon.ico"
}
```
 Infine modifico gli `scripts` per permettere l'esecuzione del processo
 ```json
 "scripts": {
   "electron": "electron .",
   "restore": "npm i --no-optional --no-package-lock",
   "postinstall": "install-app-deps",
   "start": "npm install && electron .",
   "pack": "build --dir",
   "dist": "build",
   "dist:win": "build --win --ia32 --x64",
   "dist:32win": "build --win --ia32 ",
   "dist:64win": "build --win --x64",
   "dist:32deb": "build --linux --ia32",
   "dist:64deb": "build --linux --x64"
 },
 ```

Per lanciare la creazione di una app portatile per win32 scrivo, da terminale

> npm run dist:64win

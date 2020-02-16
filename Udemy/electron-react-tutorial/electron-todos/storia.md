# Electron To Do

## App Boilerplate

Come al solito comincio con creare il file _paclage.json_ :

> npm init

e poi a seguire installo _electron_

> npm --save-dev electron

e infine aggiungo

```json
"scripts": {
  "electron": "electron ."
}
```

lo script per avviare l'app da riga di comando.

## Creating the mainWindow

Inserico nel file _index.js_ il codice per avviare _electron_ e aprire la finestra principale del programma:

```javascript
const electron = require('electron');

const {
  app,
  BrowserWindow
} = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/main.html`);
});
```

Chiamo la finestra principale _main.html_ in modo da poterla distinguere dalle altre finestre che verranno utilizzate dal programma:

```html
<head>
  <body>
    <h1>My Todos</h1>
  </body>
</head>
```

## Constructing Menu Bars

Per creare un menù nella finestra di Electron occorre definire la const Menu:

```javascript
cons Menu = electron.Menu;
```

I menù vengono definiti con degli array di oggetti:

```javascript
const menuTemplate = [
  {
    label: 'File'
  },
  {
    label: 'Edit'
  },
  {
    label: 'View'
  }
];
```

Ogni oggetto dell'array è un item del menu.

Per visualizzare il menù nella finestra di electron si utilizza:

```javascript
  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
```

Per dchiarare un submenu si usa un oggetto

```javascript
const menuTemplate = [
  {
    label: 'File',
    submenu: [{
      label: 'New Todo'
    }]
  }
];
```

`NOTA` Windows e OSX si comportano in maniera differente nella gestione del menu. OSX mette la prima voce dentro il nome del programma rendendo di fatto invisibile il primo menu. Per evitare questo è sufficiente aggiungere un menù vuoto ({}) come primo elemento dell'array. Però in questo modo Windows mostrerà un primo menù vuoto. Un modo per risolvere la situazione è aggiungere dinamicamente un menù in base la sistema operativo utilizzato. Per poterlo fare si utilizza `process.platform` che restituisce il nome della piattaforma su cui si sta lavorano. Per OSX è `darwin`. Di conseguenza basta aggiungere questa funzione al codice:

```javascript
if (process.platform === 'darwin') {
  menuTemplate.unshift({});
}
```

Per assegnare un comando al menù si aggiunge una proprietà all'oggetto:

```javascript
{
  label: 'Quit',
  click() {
    app.quit();
  }
}
```

In questo esempio al menù `Quit' è assegnata la funzione`app.quit()`(che fa uscire dall'app) nel momento in cui avviene l'eventi`click()`.

Per assegnare una scorciatoia da tastiera si usa la proprietà `accelerator`:

```json
accelerator: 'Command+Q'
```

La combinazione di tasti si scrive in maniera testuale (Command, Ctrl, Alt, ecc... con il simbolo `+` per collegare i vari comandi). Ovviamente si possono assegnare comandi diversi in base al sistema operativo su cui si sta lavorando: accelerator accetta il risultato di una funzione come parametro.

```javascript
accelerator: (() => {
  if (process.platform === 'darwin') {
    return 'Command+Q';
  } else {
    return 'Ctrl+Q';
  }
})(),
```

Che può essere semplificato in

```javascript
accelerator: process.platform === 'darwin' ? 'Command+Q': 'Ctrl+Q',
```

## Creating Separate Windows

Per creare una nuova finestra si utilizza un metodo simile a quello usato per creare la finestra principale dell'app:

```javascript
function createAddWindow() {
  addWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: 'Add New Todo'
  });
}
```

con la differenza che, in questo caso, assegno alcune proprietà (e la creo collegata a una nuova variabile).

Poi per aprire la finestra dal menù uso

```javascript
{
    label: 'New Todo',
    click() {
      createAddWindow();
    }
},
```

## Chiudere l'app alla chiusura della finestra principale

Electron non chiude l'app automaticamente se c'è qualche finestra ancora aperta. Per ottenere un comportamento simile a quello di un programma desktop (alla chiusura della finestra principale chiudi tutto) è sufficiente aggiungere

```javascript
app.on('ready', () => {
  // ...
  mainWindow.on('closed', () => app.quit());
  // ...
});
```

## Aggiungere Developer tools

Quando si crea un nuovo menù, i menù di default vengono annullati. Di conseguenza non c'è la possibilità di accedere agli strumenti per sviluppatori (nemmeno tramite la combinazione di tasti `Ctrl+Shift+I`) e al `forcereload`. Per ripristinare questa possibilità occorre creare un nuovo menù:

```javascript
// un menù con tools utili per il debug
// da usare solamente quando non si è nella release in distribuzione
if (process.env.NODE_ENV !== 'production') {
  menuTemplate.push({
    label: '&DEBUG',
    submenu: [{
        label: 'Strumenti per sviluppatori',
        accelerator: acceleratore('Command+Alt+I', 'Ctrl+Shift+I'),
        click(menuItem, focusedWindow, event) {
          focusedWindow.toggleDevTools();
        }
      },
      {type: 'separator'},
      {
        role: "reload"
      },
      {
        role: "forcereload"
      }
    ]
  });
}
```

Da notare

```javascript
    click(menuItem, browserWindow, event) {}
```

Infatti **Click()** accetta tre parametri opzionali che permettono di gestire meglio gli eventi collegati al menu.

Infine, è possibile ottenere lo stesso risultato in maniera più rapita usando la proprietà `role`:

```javascript
  {
      role: "toggleDevTools"
  }
```

Per vedere tutte le possibilità di `role` vedi [qui](https://github.com/electron/electron/blob/master/docs/api/menu-item.md).

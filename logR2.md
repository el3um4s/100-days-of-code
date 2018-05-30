# 100 Days Of Code - ROUND 02

[Go To Home](https://el3um4s.github.io/100-days-of-code/)

### Projects completed

  1. R2D1 - **FlappyBird Clone** - [Online Demo](/Udemy/Construct3/the-complete-game-creation-learning-course/flappy-bird/index.html) - [Source Code](/Udemy/Construct3/the-complete-game-creation-learning-course/src/FlappyBird.c3p)
  1. R2D4 - **Plaftormer Demo** - [Online Demo](/Udemy/Construct3/the-complete-game-creation-learning-course/platformer/index.html) - [Source Code](/Udemy/Construct3/the-complete-game-creation-learning-course/src/Platformer.c3p)

### R2D1: Martedì 22 Marzo 2018

Ho interrotto il primo round a 60 giorni. Anche se poi, in realtà, ho continuato comunque a programmare e a giocare con JavaScript. Ho deciso di riprovare con **#100DaysOfCode Challenge**.

In questi 100 giorni mi interessa approfondire due cose in particolare:
  1. [**Construct 3**](https://www.construct.net);
  1. JavaScript

Per riuscirci conto di:
  * seguire i corsi di Udemy:
    - [Construct 3 - The Complete Game Creation Learning Course](https://www.udemy.com/construct-3/);
    - [Create 20 sport casino games in Construct 2/Construct 3](https://www.udemy.com/create-20-sport-casino-games-in-construct-2-construct-3/);
    * quando possibile, se possibile, integrare quanto ho imparato in questi corsi con delle funzioni js

Ci sarebbero anche altre cose, ovviamente. Ma data l'esperienza del primo round, preferisco concentrarmi su una cosa sola.

Si comincia.

![flappy-bird-01.gif](/Udemy/Construct3/the-complete-game-creation-learning-course/img-log/flappy-bird-01.gif)

E si comincia con un clone di **FlappyBird**. È un ripasso (è la terza o quarta volta che faccio una cosa simile) ma il corso ha questo come primo progetto. Quindi:

  * [Source Code](/Udemy/Construct3/the-complete-game-creation-learning-course/src/FlappyBird.c3p)
  * [Online Demo](/Udemy/Construct3/the-complete-game-creation-learning-course/flappy-bird/index.html)

### R2D2: Mercoledì 23 Marzo 2018

![platformer-01.gif](/Udemy/Construct3/the-complete-game-creation-learning-course/img-log/platformer-01.gif)

Secondo giorno, e secondo progetto: oggi è stato il turno dei giochi **platformer**. Non ho mai completato un platformer, quindi sono abbastanza curioso di vedere cosa posso tirare fuori da questo corso. Per il momento, oggi, ho completato la prima parte, quindi:

  * uso di una tilemap
  * movimento del player tramite tastiera
  * e _l'arrampicata sui muri_

Va bene, anche se speravo di riuscire a concludere completamente il progetto.

### R2D3: Giovedì 24 Marzo 2018

![platformer-02.gif](/Udemy/Construct3/the-complete-game-creation-learning-course/img-log/platformer-02.gif)

Il secondo progetto del corso mi sta tenendo impegnato più quanto pensassi. Anche perché non pensavo ci fossero così tante cose da fare per impostare un **platformer**. Comunque, oggi ho aggiunto:

  * un contatore dei punti
  * una barra della salute per il player (la barra cambia lunghezza in base alla salute del gicatore)
  * diversi tipi di nemici:
    - uno fermo, che si attiva andandoci addosso
    - uno che si muove in orrizontale
    - uno che si muove in verticale
    - uno che spara verso la direzione del player
  * un power up per attivare il double jump

### R2D4: Venerdì 25 Marzo 2018

![platformer-03.gif](/Udemy/Construct3/the-complete-game-creation-learning-course/img-log/platformer-03.gif)

Finito il secondo progetto del corso: è un semplice **platform game** su un solo livello. Ovviamente è molto semplice però è stato utile per capire come fare a:

  * aggiungere un'arma al player
  * creare piattaforme che si muovono in verticale o in linea retta
  * creare un salvataggio del gioco

Link:
  - [Online Demo](/Udemy/Construct3/the-complete-game-creation-learning-course/platformer/index.html)
  - [Source Code](/Udemy/Construct3/the-complete-game-creation-learning-course/src/Platformer.c3p)

### R2D5: Sabato 26 Maggio 2018

![c3-calc.gif](/immagini/construct3/c3-calc.gif)

Oggi niente corso su C3: ho deciso di fare una pausa e di provare a costruire una calcolatrice. L'idea è di rifare con Construct3 la stessa che ho costruito con VueJS. Mi pare che sia fattibile, e che sia anche più semplice.

Per il momento ho costruito l'interfaccia grafica e cominciato a lavorare sugli input da tastiera e da mouse. Ho trovato un problema nella gestione degli array su C3.

### R2D6 - R2D7: Lunedì 28 e Martedì 29 Maggio

![c3-calc-autoupdate.gif](/immagini/construct3/c3-calc-autoupdate.gif)

In questi due giorni mi sono concentrato sulla mia calcolatrice in C3. O, meglio, su come far si che si possa aggiornare automaticamente usando electronjs. Su Windows funziona mentre ho dei problemi con Linux, e onestamente non riesco a venirne a capo.

Comunque, come riferimento, ho usato queste due risorse:
  - [Quick and painless automatic updates in Electron](https://medium.freecodecamp.org/quick-painless-automatic-updates-in-electron-d993d5408b3a)
  - [electron-updater-example](https://github.com/iffy/electron-updater-example)


# 100 Days Of Code - ROUND 02

[Go To Home](https://el3um4s.github.io/100-days-of-code/)

### Projects completed

  1. R2D1 - **FlappyBird Clone** - [Online Demo](/Udemy/Construct3/the-complete-game-creation-learning-course/flappy-bird/index.html) - [Source Code](/Udemy/Construct3/the-complete-game-creation-learning-course/src/FlappyBird.c3p)
  1. R2D4 - **Plaftormer Demo** - [Online Demo](/Udemy/Construct3/the-complete-game-creation-learning-course/platformer/index.html) - [Source Code](/Udemy/Construct3/the-complete-game-creation-learning-course/src/Platformer.c3p)
  1. R2D10 - **3D Racer** - [Online Demo](/Udemy/Construct3/the-complete-game-creation-learning-course/3d-racer/index.html) - [Source Code](/Udemy/Construct3/the-complete-game-creation-learning-course/src/3DRacer.c3p)
  1. R2D17 - **Lunar Lander**- [Online Demo](https://el3um4s.github.io/100-days-of-code/YouTube/Construct3/construct-tutorials-by-cken-yoshida/lunar-lander/) - [Source Code](/YouTube/Construct3/construct-tutorials-by-cken-yoshida/src/LunarLander.c3p)
  1. R2D19 - **Facebook Instant Game** (demo) - [Source Code](/Udemy/Construct3/complete-facebook-instant-games-course/src/)
  1. R2D21 - **Match 3** - [Online Demo](/Udemy/Construct3/make-a-match-3-game-in-construct-2/Match3/index.html) - [Source Code](/Udemy/Construct3/make-a-match-3-game-in-construct-2/Match3.c3p)

### Certificates

**R2D19**
![Facebook Instant Games](/Certificate/UC-EBR70623.jpg)


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

### R2D8: Mercoledì 30 Maggio

![c3-calc-0.0.4.gif](/immagini/construct3/c3-calc-0.0.4.gif)

Oggi ho modificato molte cose. Ho sistemato i layout in modo da poter gestire diverse _pagine_ in maniera tutto sommato fluida. Ho poi modificato l'icona creandone una specifica. E, infine, ho aggiunto un menù.

### R2D9: Giovedì 31 Maggio

![c3-calc-0.0.5.gif](/immagini/construct3/c3-calc-0.0.5.gif)

Ho aggiunto la gestione dei decimali, usando la libreria [math.js](http://mathjs.org/). Ho preferito questa soluzione a quella usata nell'altra mia calcolatrice, [vue-calc](https://github.com/el3um4s/vue-calc), per... beh, semplicemente perché è più semplice da usare. In sostanza ho usato la proprietà `math.eval(...espressione...)` per ottenere il risultato.

### R2D10: Venerdì 1 Giugno

![3d-racer.gif](/Udemy/Construct3/the-complete-game-creation-learning-course/img-log/3d-racer.gif)

Oggi niente C3 Calc: sono tornato al corso di Udemy. Ho fatto un altro modulo, quello dedicato al gioco 3D RACER. Non ho seguito gracnhé il tutorial, anzi. Sono andato per la mia strada ma sono abbastanza soddisfatto del risultato ottenuto.

Link:
  - [Online Demo](/Udemy/Construct3/the-complete-game-creation-learning-course/3d-racer/index.html)
  - [Source Code](/Udemy/Construct3/the-complete-game-creation-learning-course/src/3DRacer.c3p)

### R2D11: Domenica 3 Giugno

![turret-defense-01.gif](/Udemy/Construct3/the-complete-game-creation-learning-course/img-log/turret-defense-01.gif)

Oggi solo studio, nessuna attività pratica. Ho studiato come fare un turret defense game: inizio ad avere voglia di creare un gioco completo.

### R2D12: Martedì 5 Giugno

![space-invaders-01.gif](/immagini/construct3/space-invaders-01.gif)

Ci ho provato, a seguire un tutorial su come creare un clone di Space Invaders. Il risultato? Una cosa che richiama il gioco classico, ma un po' più fluido. L'effetto non è affatto male, peccato aver aggiunto troppi effetti: su smartphone gira davvero male.

### R2D13-D14: Giovedì 7 e Sabato 9 Giugno

![c3-calc-0.0.6-style-color.gif](/immagini/construct3/c3-calc-0.0.6-style-color.gif)

Sono tornato sulla mia C3 Calc e ho cominciato a lavorare sugli stili. Ovvero, per il momento, è possibile scegliere tra 8 diversi colori (`White, Black, Red, Green, Blue, Yellow, Magenta, Cyan`) per lo sfondo e per i caratteri. Non voglio fare una cosa più complessa perché, per il momento, vorrei evitare di aggiungere degli addons personalizzati a C3. Poi, magari, forse più avanti farò qualcosa di più complesso.

Adesso, rispetto a Vue Calc, questa calcolatrice ha una funzionalità in meno (la possibilità di cambiare il formato numerico in base alla lingua del sistema) e una in più (la possibilità di cambiare lo stile grafico). Manca ancora la scelta dei font (che metterò al prossimo giro) e poi penso di rilasciare una nuova versione tramite electronjs.

### R2D15: Domenica 10 Giugno

![c3-calc-0.0.6-font-mina-roboto.gif.gif](/immagini/construct3/c3-calc-0.0.6-font-mina-roboto.gif.gif)

Ho pubblicato una nuova versione ci C3 Calc. Alla fine ho deciso di impostare due font di Google come caratteri predefiniti (Mina per i risultati a display, Roboto per tutto il resto): per il momento non voglio aggiungere un'ulteriore livello di personalizzazione.

### R2D16: Lunedì 11 Giugno

![c3-lunar-landing-01.gif](/immagini/construct3/c3-lunar-landing-01.gif)

Ho comciniato un'altro semplice gioco. Trovo molto interessante vedere come sono fatto i giochi classici: mi permette di comprendere meglio i meccanismi alla loro base e, spero, di poterli applicare in un qualche progetto più complesso.

### R2D17: Martedì 12 Giugno

![c3-lunar-landing-02.gif](/immagini/construct3/c3-lunar-landing-02.gif)

### R2D18: Giovedì 14 Giugno

Ho comprato un nuovo corso di Udemy: **Complete Facebook Instant Games Course**. E' fatto abbastanza bene, anche se è pensato più per Construct 2 che per C3. Comunque, spiega abbastanza bene le basi su come impostare un instant game per Facebook, su come ricevere le informazioni del player collegato (cioè il nome, l'immagine profilo e poco altro), e su come gestire le classifiche.

### R2D19: Venerdì 15 Giugno

![Facebook Instant Games](/Certificate/UC-EBR70623.jpg)

Finito il corso sugli Instant Games di Facebook.

### R2D20: Sabato 16 Giugno

![c3-match3.gif](/immagini/construct3/c3-match3.gif)

Ho cominciato a studiare come creare un gioco match 3. Sto seguendo una serie di tutorial di qualche anno fa, per il momento pare abbastanza semplice e fattibile.

Link: [Match 3 tutorial](http://davesilvermanart.com/blog/2013/07/16/post-mortem-match-3-tutorial-series/)

### R2D21: Domenica 17 Giugno

![c3-match3-end.gif](/immagini/construct3/c3-match3-end.gif)

Finito anche questo esercizio. Volendo potrei anche andare avanti, aggiungendo un po' di cosette. Ma per il momento mi fermo qui. Adesso devo pensare un pochetto a che tipo di gioco voglio creare. Ho molte idee in testa, ma sopratutto voglio fare un progetto completo. Quindi mi serve un gioco semplice, che non richieda troppo lavoro e mi permetta di (ri)provare la pubblicazione su Play Store.

### R2D22: Martedì 19 Giugno

![c3-move-player-path.gif](/immagini/construct3/c3-move-player-path.gif)

### R2D23: Mercoledì 20 Giugno

![c3-one-touch-platformer-01.gif](/immagini/construct3/c3-one-touch-platformer-01.gif)

Ieri e oggi ho lavorato sull'idea di un gioco platformer per smartphone. Importante, penso, la possibilità di giocarci con in telefono in verticale e con dei comandi molto semplici. Quindi, penso che userò un movimento collegato al lancio di una corda. Ogni volta che si tocca lo schermo viene lanciata una corda. Quando la corda si attacca a qualcosa il giocatore viene trascinato verso la cima.

### R2D24: Giovedì 21 Giugno

![c3-one-touch-platformer-02.gif](/immagini/construct3/c3-one-touch-platformer-02.gif)

### R2D25: Venerdì 22 Giugno

![c3-one-touch-platformer-03.gif](/immagini/construct3/c3-one-touch-platformer-03.gif)

### R2D26: Domenica 24 Giugno

![c3-one-touch-platformer-04-morte.gif](/immagini/construct3/c3-one-touch-platformer-04-morte.gif)

### R2D27: Martedì 26 Giugno

![c3-one-touch-platformer-05-autotiles-test.gif](/immagini/construct3/c3-one-touch-platformer-05-autotiles-test.gif)

### R2D28: Giovedì 28 Giugno

![c3-one-touch-platformer-06-autotiles-test-live.gif](/immagini/construct3/c3-one-touch-platformer-06-autotiles-test-live.gif)

### R2D29: Sabato 30 Giugno

![c3-one-touch-platformer-09-zoomELunghezza.gif](/immagini/construct3/c3-one-touch-platformer-09-zoomELunghezza.gif)

### R2D30: Lunedì 2 Luglio

Oggi nessuna gif da mostrare. Ho lavorato sull'ottimizzazione del gioco, sopratutto sulla velocità di caricamento. Sono riuscito a ridurre il tempo di avvio da 4 secondi e rotti a meno di un secondo: mi piace. Ovviamente il livello di test è ancora semplice e probabilmente quando aggiungerò elementi dovrò tornare a ragionare meglio su questo aspetto.

### R2D31: Martedì 3 Luglio

Clicca sull'immagine per far partire il video

[![One touch platfomer game](https://img.youtube.com/vi/3-8x0tG3bEk/0.jpg)](https://www.youtube.com/watch?v=3-8x0tG3bEk)

Oggi giorno di test: ho creato il primo livello di test. Ovviamente non è completo però è la prima prova effettiva delle potenzialità del gioco. E devo dirlo, sono soddisfatto. Il personaggio si muove bene e ci sono buone potenzialità per creare livelli interessanti.

### R2D32: Giovedì 5 Luglio

![c3-one-touch-platformer-10-prova-grafica-a-mano.gif](/immagini/construct3/c3-one-touch-platformer-10-prova-grafica-a-mano.gif)

![c3-one-touch-platformer-11-prova-grafica-a-mano.gif](/immagini/construct3/c3-one-touch-platformer-11-prova-grafica-a-mano.gif)

### R2D33: Venerdì 6 Luglio

![c3-one-touch-platformer-12-prova-sangue.gif](/immagini/construct3/c3-one-touch-platformer-12-prova-sangue.gif)

### R2D34: Sabato 7 Luglio

![c3-one-touch-platformer-13-refractoring-camera-system.gif](/immagini/construct3/c3-one-touch-platformer-13-refractoring-camera-system.gif)

### R2D35: Domenica 8 Luglio

Oggi ho cominciato a lavorare su un meccanismo per creare automaticamente i vari livelli. Non ho ancora trovato la soluzione ma ho scovato due articoli utili:
* [SpelunkyGen (part 1)](http://tinysubversions.com/spelunkyGen/)
* [SpelunkyGen (part 2)](http://tinysubversions.com/spelunkyGen2/)
Penso di aver grosso modo capito la teoria che ci sta dietro. Mi manca però tutta la parte pratica :sweat_smile:


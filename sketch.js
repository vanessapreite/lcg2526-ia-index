//Variabili globali
let numFlowers = 10; //Quante volte ripeto blocco che disegna il fiore
let angle = 0; //  variabile per animare la rotazione

function setup() {
  createCanvas(windowWidth, windowHeight); 
  angleMode(DEGREES); //imposta gli angoli in gradi
}

function draw() { 
  background("#0D0D0D");
  translate(width/2,height/2); //s posta l'origine al centro della tela

  for (let j = 0; j < numFlowers; j++) {
    rotate(angle);
    drawFlower("#F25C05", 60, 100, 0, 8 ); //petali lontani dal centro e grandi
    drawFlower("#F2A0DC", 30, 200, 0, 12 );
    drawFlower("#F20505", 20, 300, 0, 15 ); //petali vicini al centro e piccoli
    drawFlower("#AC79F2", 30, 400, 0, 12 );
    drawFlower("#027333", 60, 500, 0, 8 );
    
  }

  angle = angle + 0.2;

}

function drawFlower(petalColour, size, xPos, yPos, petals) {  //funzione usata per disegnare
                                                              // il blocco del fiore
                                                             //posso richiamare la stessa funzione
                                                             // più volte con valori diversi
                                                             //senza creare 5 variabili globali

    push()
    translate(xPos,yPos);

    //petals
    fill(petalColour);
    for(let i = 0; i < petals; i++){   
      rotate(360/petals);
      ellipse(size/2,0,size/2); //è usato sia per la posizione
                                //sia per la larghezza del petalo
    }

    // center circle
    fill("#FFFFFF");
    ellipse(0,0,size) //size usato come diametro del cerchio
                      //il centro cresce proporzionalmente a size.


    pop()
  
}
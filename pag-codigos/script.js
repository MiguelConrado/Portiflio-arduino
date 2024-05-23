let textarea = document.createElement('textarea')
textarea.classList.add('text-area')
let codContainer = document.querySelector('.codigos-container')

codContainer.appendChild(textarea)

function coded1() {
    textarea.innerHTML = `
  1   //  dando um "nome" para as portas
  2   int vermelho = 10;
  3   int amarelo = 9;
  4   int verde = 8;
  5
  6   void setup() {
  7 
  8   pinMode(vermelho, OUTPUT);
  9   pinMode(amarelo, OUTPUT);
  10  pinMode(verde, OUTPUT);
  11  }
  12
  13  void loop() {
  14  // vamos começar do amarelo. Estranho não? 
  15  // você vai entender no próximo exercício!
  16  digitalWrite(vermelho, LOW);
  17  digitalWrite(amarelo, HIGH);
  18  digitalWrite(verde, LOW);
  19
  20  // esperamos 2s com o sinal no amarelo
  21  delay(2000);
  22
  23  // apagamos o amarelo e ligamos o vermelho
  24  digitalWrite(amarelo, LOW);
  25  digitalWrite(vermelho, HIGH);
  26  
  27  // digitalWrite(verde, LOW);
  28
  29  // esperamos 5s com o sinal fechado
  30  delay(5000);
   
    `

}

function coded2() {

    textarea.innerHTML = `
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga modi consequatur nesciunt earum quis? Quod, autem corporis dolores, quaerat suscipit dolorem atque voluptatum consequuntur repellendus quia ducimus, cupiditate recusandae alias?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga modi consequatur nesciunt earum quis? Quod, autem corporis dolores, quaerat suscipit dolorem atque voluptatum consequuntur repellendus quia ducimus, cupiditate recusandae alias?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga modi consequatur nesciunt earum quis? Quod, autem corporis dolores, quaerat suscipit dolorem atque voluptatum consequuntur repellendus quia ducimus, cupiditate recusandae alias?
    
   `

}

function coded3() {

    textarea.innerHTML = `
  1     // dando um "nome" para as portas
  2     int vermelho = 10;
  3     int amarelo = 9;
  4     int verde = 8;
  5
  6     void setup() {
  7     // indicando para o arduíno quais portas vamos usar
  8     pinMode(vermelho, OUTPUT);
  9     pinMode(amarelo, OUTPUT);
  10    pinMode(verde, OUTPUT);
  11    }
  12
    `

}


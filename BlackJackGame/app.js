// let player = {
//     name : "Brian",
//     chips : 500
// }
let cards = []//array
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = ''
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
// let playerEl= document.getElementById("player-el")
// playerEl.textContent = `${player.name}: $${player.chips}`


function getRandomCard(){
    let randomNumber = Math.ceil(Math.random()*13)
    if(randomNumber === 1){
        return 11;
    }else if(randomNumber > 10){
        return 10; 
    }else{
        return randomNumber}

}

function startGame(){
    isAlive = true;
    let firstNumber = getRandomCard()
    let secondNumber = getRandomCard()
    cards=[firstNumber,secondNumber]
    sum = firstNumber + secondNumber
    renderGame()
    if (sum===21){
        setTimeout(function(){
            location.reload(true);
        },5000);
    }
}

function renderGame(){
    cardsEl.textContent = `Cartas: `
    for (let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i]+ " "
    }

    sumEl.textContent = `Suma: ${sum}`
    if (sum <= 20) {
        message = "Queres recibir otra carta? 🙂"
    } else if (sum === 21) {
        message = "Perfecto! Tenes Blackjack! 🥳"
        hasBlackJack = true;
        setTimeout(function(){
            location.reload(true);
        },5000);
    } else {
        message = "Perdistee, 😭 croto"
        isAlive = false;
    }
    messageEl.textContent = message
   
}
function newCard() {
    if (isAlive && !hasBlackJack){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }else if(hasBlackJack){
        location.reload(true);
    }
    
}

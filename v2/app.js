var decks = [];
var matches = [];

var root = document.getElementById("deck-container");
var totalMatchesDiv = document.getElementById("total-matches");

var firstMatch = 0;
var totalMatches = 0;

const isFirstMatch = (element) => element > 0;


function doIt(){
    root.innerHTML = "";
    totalMatchesDiv.innerHTML = "";
    decks.length = 0;   
    matches.length = 0;
    
    var deckCnt = document.getElementById("deckCount").value;

    var posContainer = document.createElement("div");
        posContainer.classList.add("position");
        posContainer.id = "position";

        root.appendChild(posContainer);

    for(var i = 0; i < 52; i++){
        var div = document.createElement("div");
        var pos = i + 1;                       // Create a <p> node
        var t = document.createTextNode(pos.toString().padStart(2, '0'));      // Create a text node
        
        matches.push(0);
        div.appendChild(t);                                          // Append the text to <p>
        div.classList.add("playing-card");

        posContainer.appendChild(div); 
    }

    for(var i=0; i< deckCnt; i++)  {
        decks.push(new Deck());
    }

    for (let currentDeck = 0; currentDeck < deckCnt; currentDeck = currentDeck + 1) {
        
        var deckContainer = document.createElement("div");
        deckContainer.classList.add("deck");
        deckContainer.id = "deck-" + currentDeck;

        root.appendChild(deckContainer);

        decks[currentDeck].deck.forEach((item, index) => printCard(item, index, currentDeck, deckCnt,deckContainer))
        {
            
        }    
    }
    
    firstMatch = matches.findIndex(isFirstMatch) + 1;

    var divFirstMatch = document.createElement("p");                       // Create a <p> node
    var tFirstMatch = document.createTextNode("First Match Position: " + firstMatch);      // Create a text node
    divFirstMatch.appendChild(tFirstMatch);

    var divTotal = document.createElement("p");                       // Create a <p> node
    var tTotal = document.createTextNode("Total matches: " + matches.reduce(total));      // Create a text node
    divTotal.appendChild(tTotal);
    
    totalMatchesDiv.appendChild(divFirstMatch)
    totalMatchesDiv.appendChild(divTotal);



    console.log("First: " + firstMatch);

    console.log("Total: " + matches.reduce(total));
}

  function printCard(card,currentIndex,currentDeck,deckCnt,deckContainer) {
    var div = document.createElement("div");                       // Create a <p> node
    var t = document.createTextNode(card + getSuit(card));      // Create a text node
    
    var suit = card.charAt(1);
    
    div.innerHTML = card.charAt(0) + getSuit(card);

    //div.appendChild(t);                                          // Append the text to <p>
    div.classList.add("playing-card");

    console.log("Deck: " + currentDeck + " Index: " + currentIndex + " Card:" + card)

    if(isMatch(currentDeck, currentIndex, card, deckCnt)){
        div.classList.add("match");
        if(suit == 'H' || suit == 'D') {
            div.classList.add("red");
        }
    }

    deckContainer.appendChild(div); 
  }

function isMatch(currentDeck,currentIndex,currentCard,deckCnt){
    var match = false;
    for (let counter = 0; counter < deckCnt; counter = counter + 1){
        //console.log(currentDeck + ":" + counter);
        
        if(currentDeck != counter){
            //console.log(decks[currentDeck].deck[currentIndex]);
            if(decks[currentDeck].deck[currentIndex] == decks[counter].deck[currentIndex]){
                match = true;
                matches[currentIndex] = 1;
            }
        }       
    }
    return match;
}

function total(total, num) {
    return total + num;
  }

function getSuit(card){
    var value = card.charAt(0);
    var suit = card.charAt(1);
    var text = "";

    if(suit == "H") {
        text = "&hearts;"
    }

    if(suit == "D") {
        text = "&diams;"
    }

    if(suit == "S") {
        text = "&spades;"
    }

    if(suit == "C") {
        text = "&clubs;"
    }

    return text;
}
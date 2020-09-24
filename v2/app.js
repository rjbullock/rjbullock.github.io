var decks = [];
var matches = [];

var root = document.getElementById("deck-container");
var statsDiv = document.getElementById("stats");

var firstMatch = 0;
var totalMatches = 0;

const isFirstMatch = (element) => element > 0;

function doIt(){
    console.clear();
    root.innerHTML = "";
    statsDiv.innerHTML = "";
    decks.length = 0;   
    matches.length = 0;
    
    var deckCnt = document.getElementById("deckCount").value;

    //Need a minimum of two decks
    if(deckCnt < 1){
        deckCnt = 2;
    }

    var posContainer = document.createElement("div");
        posContainer.classList.add("position");
        posContainer.id = "position";

    root.appendChild(posContainer);

    //Create position indicator row
    for(var i = 0; i < 52; i++){
        var div = document.createElement("div");
        var pos = i + 1;                      
        var t = document.createTextNode(pos.toString().padStart(2, '0'));      // Create a text node
        
        matches.push(0);
        div.appendChild(t);                                          // Append the text to <p>
        div.classList.add("playing-card");

        posContainer.appendChild(div); 
    }

    //Setup decks.
    for(var i=0; i < deckCnt; i = i + 1)  {
        decks.push(new Deck());
    }

    //Loop through all decks.
    for (var currentDeck = 0; currentDeck < deckCnt; currentDeck = currentDeck + 1) {
        //console.log("Outter Deck: " + currentDeck)
        var deckContainer = document.createElement("div");
        deckContainer.classList.add("deck");
        deckContainer.id = "deck-" + currentDeck;

        root.appendChild(deckContainer);

        decks[currentDeck].deck.forEach((card, currentIndex) => printCard(card, currentIndex, currentDeck, deckCnt, deckContainer));

    }
    
    //Show first match
    firstMatch = matches.findIndex(isFirstMatch) + 1;

    var divFirstMatch = document.createElement("p");                       // Create a <p> node
    var tFirstMatch = document.createTextNode("First Match Position: " + firstMatch);      // Create a text node
    divFirstMatch.appendChild(tFirstMatch);

    //Show total matches
    var divTotal = document.createElement("p");                       // Create a <p> node
    var tTotal = document.createTextNode("Total matches: " + matches.reduce(total));      // Create a text node
    divTotal.appendChild(tTotal);
    
    statsDiv.appendChild(divFirstMatch)
    statsDiv.appendChild(divTotal);

    //Reset matches
    matches.length = 0;
}

  function printCard(card, currentIndex, currentDeck, deckCnt, deckContainer) {
    //console.log("Card Index: " + currentIndex);

    var div = document.createElement("div");                       // Create a <p> node
    var t = document.createTextNode(card + getSuit(card));      // Create a text node
    
    var suit = card.charAt(1);
    
    div.innerHTML = card.charAt(0) + getSuitSymbol(card);

    //div.appendChild(t);                                          // Append the text to <p>
    div.classList.add("playing-card");

    //console.log("Deck: " + currentDeck + " Index: " + currentIndex + " Card:" + card)

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

    var checkColor = document.getElementById("match-color");
    var matchColor = false;

    var checkSuit = document.getElementById("match-suit");
    var matchSuit = false;

    var checkValue = document.getElementById("match-value");
    var matchValue = false;

    //Loop through each deck 
    for (var counter = 0; counter < deckCnt; counter = counter + 1){
       
        //Don't compare to itself!
        if(currentDeck != counter){
            //console.log("Outter Deck: " + currentDeck + " Inner deck: " + counter);
            //console.log(decks[currentDeck].deck[currentIndex]);

            if(checkValue.checked){
                if(getValue(decks[currentDeck].deck[currentIndex]) == getValue(decks[counter].deck[currentIndex])) {
                    matchValue = true;
               }
               else {
                   matchValue = false;
               }
            }
            else{
                //If we're not checking value, it's always a match!
                matchValue = true;
            }

            if(checkSuit.checked){
                if(getSuit(decks[currentDeck].deck[currentIndex]) == getSuit(decks[counter].deck[currentIndex])) {
                    matchSuit = true;
               }
               else {
                   matchSuit = false;
               }
            }
            else {
                //If we're not checking suit, then it's always a match!
                matchSuit = true;
            }

            if(checkColor.checked){
               if(getColor(decks[currentDeck].deck[currentIndex]) == getColor(decks[counter].deck[currentIndex])) {
                    matchColor = true;
               }
               else {
                   matchColor = false;
               }
            }
            else {
                matchColor = true;
            }          
            /*if(decks[currentDeck].deck[currentIndex] == decks[counter].deck[currentIndex]){
                match = true;
                matches[currentIndex] = 1;
            }*/

            match = matchColor && matchSuit && matchValue;

            if(match){
                matches[currentIndex] = 1;
                return true;
            }

            console.log((currentDeck) + ":" + counter + ":" + (currentIndex) + ":" + currentCard + " c: " + matchColor + " s: " + matchSuit + " v: " + matchValue + " m: " + (matchColor && matchSuit && matchValue));
        } 
    }

    //console.log((currentDeck) + ":" + (currentIndex) + ":" + currentCard + " c: " + matchColor + " s: " + matchSuit + " v: " + matchValue);

    return false;
}

function total(total, num) {
    return total + num;
  }
 
function getSuitSymbol(card){
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

function getColor(card) {
    var suit = card.charAt(1);

    if(suit == "H" || suit == "D") {
        return "red";
    }
    else {
        return "black";
    }
}

function getSuit(card) {
    var val = card.charAt(1);

    return val;
}

function getValue(card) {
    var val = card.charAt(0);

    return val;
}
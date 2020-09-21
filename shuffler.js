var $container1 = document.getElementById('deck-1');
var $container2 = document.getElementById('deck-2');
var $container3 = document.getElementById('deck-3');
var $container4 = document.getElementById('deck-4');


// create Deck
var deck1 = Deck();
var deck2 = Deck();
var deck3 = Deck();
var deck4 = Deck();

// add to DOM
function  shuffle(){
  deck1.shuffle();
deck1.mount($container1)

deck2.shuffle();
deck2.mount($container2);

deck3.shuffle();
deck3.mount($container3);

deck4.shuffle();
deck4.mount($container4);

deck1.cards.forEach(function(card, i) {
  if (
    card.rank == deck2.cards[i].rank && card.suit == deck2.cards[i].suit || 
    card.rank == deck3.cards[i].rank && card.suit == deck3.cards[i].suit ||  
    card.rank == deck4.cards[i].rank && card.suit == deck4.cards[i].suit) {
    card.setSide('front');
  } else {
    card.setSide('back');
  }

  // explode
  card.animateTo({
    delay: 1000 + i * 2, // wait 1 second + i * 2 ms
    duration: 500,
    ease: 'quartOut',
    x: i * 25 + 50,
    y: 25
  })
})

deck2.cards.forEach(function(card, i) {
  if (card.rank == deck1.cards[i].rank && card.suit == deck1.cards[i].suit || card.rank == deck3.cards[i].rank && card.suit == deck3.cards[i].suit || card.rank == deck4.cards[i].rank && card.suit == deck4.cards[i].suit) {
    card.setSide('front');
  } else {
    card.setSide('back');
  }

  // explode
  card.animateTo({
    delay: 1000 + i * 2, // wait 1 second + i * 2 ms
    duration: 500,
    ease: 'quartOut',

    x: i * 25 + 50,
    y: 150
  })
})


deck3.cards.forEach(function(card, i) {
 if (card.rank == deck1.cards[i].rank && card.suit == deck1.cards[i].suit || card.rank == deck2.cards[i].rank && card.suit == deck2.cards[i].suit || card.rank == deck4.cards[i].rank && card.suit == deck4.cards[i].suit) {
    card.setSide('front');
  } else {
    card.setSide('back');
  }
  // explode
  card.animateTo({
    delay: 1000 + i * 2, // wait 1 second + i * 2 ms
    duration: 500,
    ease: 'quartOut',

    x: i * 25 + 50,
    y: 275
  })
})

deck4.cards.forEach(function(card, i) {
 if (card.rank == deck1.cards[i].rank && card.suit == deck1.cards[i].suit || card.rank == deck2.cards[i].rank && card.suit == deck2.cards[i].suit || card.rank == deck3.cards[i].rank && card.suit == deck3.cards[i].suit) {
    card.setSide('front');
  } else {
    card.setSide('back');
  }
  // explode
  card.animateTo({
    delay: 1000 + i * 2, // wait 1 second + i * 2 ms
    duration: 500,
    ease: 'quartOut',

    x: i * 25 + 50,
    y: 400
  })
})
}


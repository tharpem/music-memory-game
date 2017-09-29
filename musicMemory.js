
//musicCardList has one entry for each card - twice
//var used for musicCardList the only time in the entire file. Let and Const removed page content

var musicCardList = ["vogue.png",  "vogue.png", "beyonce.png", "beyonce.png", "siouxsie.png",  "siouxsie.png",  "fifty.png", "fifty.png", "bobby_blue_bland.png", "bobby_blue_bland.png", "taylor.png",  "taylor.png", "jill.png", "jill.png",  "thicke.png", "thicke.png"];

//Function called on html file to shuffle cards
let shuffle = function (musicCardList) {
    let currentIndex = musicCardList.length, temporaryValue, randomIndex;//////-dic.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = musicCardList[currentIndex];
        musicCardList[currentIndex] = musicCardList[randomIndex];
        musicCardList[randomIndex] = temporaryValue;
    }
    return musicCardList;
}

//Variables primarily for matching and comparison
const cells = ["cell1", "cell2", "cell3", "cell4", "cell5", "cell6", "cell7", "cell8", "cell9", "cell10", "cell11", "cell12", "cell13", "cell14", "cell15", "cell16"]
  pic=[]
  cell=0
  tries=0
  cardSetMatched = []
  card_set_picked = [""]
  cardA ="";
  cardB ="";
  cardBImage="";
  lastTwoCards = [""];
  card2Picked = "";
  _this = "";

//Function called on html file to place the cards where they go.
let fill = function fill_grid(musicCardList) {
  cell = 0
  for (items in musicCardList) {
    let element = document.createElement("img");
      element.setAttribute("background-image", musicCardList[cell]);
      element.setAttribute("src", "music_card_back.png");
      element.setAttribute("border-style", "outset");
      element.setAttribute("border-width", "thick");
      element.setAttribute("border-color", "grey");
      element.setAttribute("display", "block");
      element.setAttribute("id", "pic"+cell);
      element.setAttribute("class", "image");
      document.getElementById(cells[cell]).appendChild(element);
      cell++;
} document.getElementById("startTheGame").style.setProperty("display", "inline-block");
}

//Game Sounds
const needleScratch = document.createElement("AUDIO");
needleScratch.setAttribute("src", "needleScratch.mp3");

const matchSound = document.createElement("AUDIO");
matchSound.setAttribute("src", "guitarGrowl.mp3");

//Select cards, flip cards, match cards, count attempt pairs, compare cards
//Launch game over function
let check_card_set_picked_list = function check_card_set_picked_list(){
  if (card_set_picked.length==1){
    let cardAImage = $(this)[0].getAttribute("background-image");//determine face on first card
    cardA = ($(this)[0]);//define card A
    card_set_picked.push(cardAImage);//track face of which card was picked
    $(this)[0].setAttribute("src", cardAImage);//turn card over
    trackUnmatchedCardsA();//track dom Id of first card picked
    return card_set_picked;
  } if (card_set_picked.length==2){
      if ($(this)[0] != cardA.id) {
      cardB =  $(this)[0];//define card
      cardBImage = $(this)[0].getAttribute("background-image");//determine face on second card
      $(this)[0].setAttribute("src", cardBImage);//turn card over
      setTimeout(card_set_picked.push(cardBImage), 3000);//track face of which card was picked
      trackUnmatchedCardsB(); //track dom Id of second card picked
  }}
    trackMoves();//count attempted matches
    compareCards();//compare whether cards were a match
    gameOver();
  }


//Helper function to track dom of first card picked
//Helper function for check_card_set_picked_list
  const trackUnmatchedCardsA = function trackUnmatchedCardsA (){
      lastTwoCards.push(cardA.id);
      return lastTwoCards;
    }

//Helper function to track dom of second card picked
//Helper function for check_card_set_picked_list
  const trackUnmatchedCardsB = function trackUnmatchedCardsB (){
      lastTwoCards.push(cardB.id);
      return lastTwoCards;
    }

let starLevel = "";
//Helper function for check_card_set_picked_list
//Tracks moves and star Level
//Star level controls number of stars on top banner
//Star level on modal control winner level and number of gold records
const trackMoves = function trackMoves(){
  if (cardA.id != cardB.id) {//added in case same card is picked multiple times
  tries++;
  $('#tries').html(tries);}
  if (tries <=12){
    starLevel = "Triple Gold Record Level";
    $("#starLevel").html(starLevel);
  }
  if (tries > 13 && tries <16){
    starLevel = "Double Gold Record Level";
    $("#starLevel").html(starLevel);
  }
  if (tries > 16 && tries <19){
    document.getElementById("star2").setAttribute("hidden", true);
    starLevel = "Gold Record Level";
    $("#starLevel").html(starLevel);
}
  if (tries > 19){
    document.getElementById("star3").setAttribute("hidden", true);
    $("#starLevel").html(starLevel);
    starLevel = "Mix Tape out Your Car Trunk Level";
}
  return tries;
}

//Helper function for check_card_set_picked_list
const compareCards = function compareCards(){
  card1Picked = document.getElementById(lastTwoCards[1]);
  card2Picked = document.getElementById(lastTwoCards[2]);
  cardB.setAttribute("src", cardBImage);
  //if card pair is a match
  for (items in card_set_picked[1]){
    if (card_set_picked[2]==card_set_picked[1]){
    matchSound.play();
    cardSetMatched.push(card_set_picked[card_set_picked.length-1]);
    swipeMatchedLists();
    return card_set_picked;}
  }
  //if card pair is not a match
  for (items in card_set_picked[1]){
    if (card_set_picked[2]!=card_set_picked[1]){
      needleScratch.play();
      swipeUnmatchedLists();//clear lists so that
      return card_set_picked;}}
}

//Helper Function for if cards were not a match. Flips cards back
//Helper function for compareCards function
const swipeUnmatchedLists = function swipeUnmatchedLists(){
  setTimeout(flipCardsBack, 500);
  card_set_picked.splice(1, 2);
  lastTwoCards.splice(1,2);
}
//Helper Function for if cards were not a match. Cards stay face up
//Helper function for compareCards function
const swipeMatchedLists = function swipeMatchedLists(){
  card_set_picked.splice(1, 2);
  lastTwoCards.splice(1,2);
}

//Helper function for swipeUnmatchedLists
//swipeUnmatched Lists is helper function for compareCards
const flipCardsBack = function flipCardsBack(){
  card1Picked.setAttribute("src", "music_card_back.png");
  card2Picked.setAttribute("src", "music_card_back.png");
}


//Helper function for check_card_set_picked_list
//Determines number of seconds and minutes displayed in winner modal
//Determines level displayed on winner modal
const gameOver = function gameOver() {
  if (cardSetMatched.length==8){
    $('#modalSeconds').html(visualSeconds);
    $('#modalMinutes').html(minutes);
    minutes = String(minutes);
    ignite = "stop";//designates when timer stops
    popup.style.display = "block";
    $('#totalTries').html(tries);
  if (starLevel == "Gold Record Level") {
    setTimeout(goldRecord1(), 1000);
  }else if (starLevel == "Double Gold Record Level") {
    setTimeout(goldRecord1(), 1000);
    setTimeout(goldRecord2(), 1000);
  } else if(starLevel=="Triple Gold Record Level") {
  setTimeout(goldRecord1(), 1000);
  setTimeout(goldRecord2(), 1000);
  setTimeout(goldRecord3(), 1000);}}
}


 //Variables for winner pop up modal  
const close = document.getElementsByClassName("close");//variable for close "x"

// close modal on click of "x"
const closePopUp = function closePopUp() {
popup.style.display = "none";
}

// close the mPopup when user clicks outside of the box
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";}
}

//Timer variables and functions
//Timer shows at top of top banner and provides end snapshot on modal
let seconds = 0;
let visualSeconds=0;
let finalSeconds = "";
let finalMinutes = "";
let  minutes = 0;
let  hours = 0;
let ignite = "stop";
let  startTimer = function startTimer(){
  if (ignite == "start"){
    document.getElementById("startTheGame").removeAttribute("display");
     document.getElementById("startTheGame").setAttribute("display", "none");
    seconds++;
    calculateTimeMinutes();
    calculateTimeSeconds();}}

//Helper function for startTimer function
//Calculates the seconds to be displayed on screen (not total number of seconds)
const calculateTimeSeconds = function calculateTimeSeconds(){
  visualSeconds = seconds % 60;
  $('#timerSeconds').html(visualSeconds);
  return visualSeconds;
}
//Helper function for startTimer function
//Calculates the minutes to be displayed on screen
const calculateTimeMinutes= function calculateTimeMinutes(){
  minutes = (seconds/60);
  minutes= Math.trunc(minutes);//removes decimals
  $('#timerMinutes').html(minutes);
  return minutes;
}

//Function that the Play Game button on web page triggers
//Starts timer and makes Play Game button disappear
//Launches function that allows selection, matching and tracking
const startGame =function startGame(){
  ignite = "start";
  document.getElementById("startTheGame").style.setProperty("display", "none")
  setInterval(startTimer, 1000);
  check_card_set_picked_list;
}

//Function that the Play again button on modal triggers
//makes modal disappear and reloads page which resets timer and reshuffles cards
function reStartGame(){
  popup.style.display = "none";
  location.reload();
}

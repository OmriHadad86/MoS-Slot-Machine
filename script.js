let icons = [
  { src: `./img/777.jpeg`, prize: 100 },
  { src: `./img/bar.jpeg`, prize: 80 },
  { src: `./img/bell.jpeg`, prize: 70 },
  { src: `./img/cherry.jpeg`, prize: 60 },
  { src: `./img/diamond.jpeg`, prize: 50 },
  { src: `./img/heart.jpeg`, prize: 40 },
  { src: `./img/horseshoe.jpeg`, prize: 30 },
  { src: `./img/lemon.jpeg`, prize: 20 },
  { src: `./img/watermelon.jpeg`, prize: 10 },
];

let [seven, bar, bell, cherry, diamond, heart, horseshoe, lemon, watermelon] =
  icons;

let prize = icons.prize;
let userWins = 0;

let userCredit = 100;
let creditDisplay = document.getElementById("user-credit-display");
creditDisplay.innerText = userCredit;

let userBet = 1; 
let BetDisplay = document.getElementById("user-bet-display");
BetDisplay.innerText = userBet;

const betUpBtn = document.getElementById("betUp")
const downBetBtn = document.getElementById("betDown")


function increaseBet() {
  userBet++;
  BetDisplay.innerText = userBet;
  insertS.play()
   pauseBetAction(betUpBtn)
}

function decreaseBet() {
  if (userBet < 2) {
    alert("Your bet can not be smaller than 1");
    return;
  }
  userBet--;
  BetDisplay.innerText = userBet;
  insertS.play()
  pauseBetAction(betDown)
}
function pauseBetAction(button) {
    let disbutton = button.value;

    button.setAttribute('disabled', true);
    setTimeout(()=>{
        button.value = disbutton;
        button.removeAttribute('disabled');
    }, 1000)
}
function masterKey() {
  let pss = prompt("Enter password");
  if (pss === "1234") {
    icon1.src = `./img/777.jpeg`;
    icon2.src = `./img/777.jpeg`;
    icon3.src = `./img/777.jpeg`;
    winner();
    coinsD();
    coinsS.play()
    renderCredit(userCredit=100);
    return;
  }
  alert("Wrong password");
}

function renderCredit() {
  creditDisplay.innerText = userCredit;
}

function winner() {
  document.getElementById("winnermassage").className =
    "main-slot-winner-good pt-3";
    

}

function randomImg() {
  return icons[Math.floor(Math.random() * icons.length)];
}

function checkForWin() {
  if (icon1.src === icon2.src && icon2.src === icon3.src) {
   winner();
    coinsD();
    coinsS.play()
    thePrize()

  } else {
    document.getElementById("winnermassage").className = "main-slot-winner";
  }
}

function thePrize() {
  userCredit = userCredit + userBet * prize;
}


 const spinbtn =document.getElementById("spinbtn");
function pauseAction(button) {
    let disbutton = button.value;

    button.setAttribute('disabled', true);
    setTimeout(()=>{
        button.value = disbutton;
        button.removeAttribute('disabled');
    }, 2500)
}



const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");
const icon3 = document.getElementById("icon3");

function pushToSpin() {

  const slot1 = randomImg(icons);
  const slot2 = randomImg(icons);
  const slot3 = randomImg(icons);

  icon1.src = `${slot1.src}`;
  icon2.src = `${slot2.src}`;
  icon3.src = `${slot3.src}`;

  prize = `${slot1.prize}`;

  if (userCredit < userBet) {
    gameOverS.play()
    alert("Not enough credit!");
    return;
  } else {
    userCredit = userCredit - userBet;
    
  
    renderCredit();
    randomImg();
    pullS.play()
    coinsS.pause()
    pauseAction(spinbtn)
    coinsAtniD()
     checkForWin();
  }
}

// sounds=====>

const pullS = new Audio("./sound/Slot Machine Pull 1 - QuickSounds.com.mp3");
const insertS = new Audio("./sound/Slot Machine Coin Insert - QuickSounds.com.mp3")
const coinsS = new Audio("./sound/Coins Dropping Out Of Slot Machine - QuickSounds.com.mp3")
const gameOverS = new Audio("./sound/Stay with us folks.mp3")

// Animation ====>

const coinsDrups = document.getElementById("coinsdrups")
function coinsD(){
  coinsDrups.className="anim"
}
function coinsAtniD(){
  coinsDrups.className=""
}
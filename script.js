// img Array

const icons = new Array();
icons[0] = new Image();
icons[0] = `./img/777.jpeg`
icons[1] = new Image()
icons[1] = `./img/bar.jpeg`
icons[2] = new Image()
icons[2] = `./img/bell.jpeg`
icons[3] = new Image()
icons[3] = `./img/cherry.jpeg`
icons[4] = new Image()
icons[4] = `./img/diamond.jpeg`
icons[5] = new Image()
icons[5] = `./img/heart.jpeg`
icons[6] = new Image()
icons[6] = `./img/horseshoe.jpeg`
icons[7] = new Image()
icons[7] = `./img/lemon.jpeg`
icons[8] = new Image()
icons[8] = `./img/watermelon.jpeg`


function randomSlotIcon(icons) {
  return icons[Math.floor(Math.random() * icons.length)]
}

// main function

function pushToSpin() {
  const icon1 = document.getElementById("icon1");
  const icon2 = document.getElementById("icon2");
  const icon3 = document.getElementById("icon3");
  

  const sloter1 = randomSlotIcon(icons);
  const sloter2 = randomSlotIcon(icons);
  const sloter3 = randomSlotIcon(icons);
  

  icon1.src = `${sloter1}`
  icon2.src = `${sloter2}`
  icon3.src = `${sloter3}`
 

  if (sloter1 === sloter2 && sloter2 === sloter3) {
    winner(); return
  } else { document.getElementById("winnermassage").className = "main-slot-winner container pt-5" }
};

function winner() {
  document.getElementById("winnermassage").className = "main-slot-winner-good container pt-5";
};

// back door

function masterKey() {
  let pss = prompt("Enter Master Key");
  if (pss === "1234") {
    icon1.src = `./img/777.jpeg`
    icon2.src = `./img/777.jpeg`
    icon3.src = `./img/777.jpeg`
   
  }
}


function randomSlotIcon(){
  return Math.floor(Math.random()*2)+1
}

function pushToSpin(){
  const icon1 =document.getElementById("icon1");
  const icon2 =document.getElementById("icon2");
  const icon3 =document.getElementById("icon3");
  const icon4 =document.getElementById("icon4");

  const sloter1=randomSlotIcon();
  const sloter2=randomSlotIcon();
  const sloter3=randomSlotIcon();
  const sloter4=randomSlotIcon();

  icon1.innerHTML=`${sloter1}`;
  icon2.innerHTML=`${sloter2}`;
  icon3.innerHTML=`${sloter3}`;
  icon4.innerHTML=`${sloter4}`;

  if(sloter1 === sloter2 && sloter3 === sloter4 && sloter1 === sloter3){
   winner();return
  } else{document.getElementById("winnermassage").className= "main-slot-winner container pt-5"}

};



function winner(){
  document.getElementById("winnermassage").className="main-slot-winner-good container pt-5";
};

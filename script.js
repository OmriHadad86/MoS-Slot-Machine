const icons=new Array();
icons[0]=new Image();
icons[0].src = `/img/777.jpeg`
icons[1]=new Image()
icons[1].src=`/img/bar.jpeg`
icons[2]=new Image()
icons[2].src=`/img/bell.jpeg`
icons[3]=new Image()
icons[3].src=`/img/cherry.jpeg`
icons[4]=new Image()
icons[4].src=`/img/diamond.jpeg`
icons[5]=new Image()
icons[5].src=`/img/heart.jpeg`
icons[6]=new Image()
icons[6].src=`/img/horseshoe.jpeg`
icons[7]=new Image()
icons[7].src=`/img/lemon.jpeg`
icons[8]=new Image()
icons[8].src=`/img/watermelon.jpeg`

console.log(icons);


function randomSlotIcon(icons){
  return icons[Math.floor(Math.random()*icons.length)]
}


function pushToSpin(){
  const icon1 =document.getElementById("icon1");
  const icon2 =document.getElementById("icon2");
  const icon3 =document.getElementById("icon3");
  const icon4 =document.getElementById("icon4");
  

  const sloter1=randomSlotIcon(icons);
  const sloter2=randomSlotIcon(icons);
  const sloter3=randomSlotIcon(icons);
  const sloter4=randomSlotIcon(icons);





  // icon1.src=`${sloter1}`
  // icon2.src=`${sloter2}`
  // icon3.src=`${sloter3}`
  // icon4.src=`${sloter4}`
  
  // icon1.innerHTML=`${sloter1}`;
  // icon2.innerHTML=`${sloter2}`;
  // icon3.innerHTML=`${sloter3}`;
  // icon4.innerHTML=`${sloter4}`;

  if(sloter1 === sloter2 && sloter3 === sloter4 && sloter1 === sloter3){
   winner();return
  } else{document.getElementById("winnermassage").className= "main-slot-winner container pt-5"}

};
function winner(){
  document.getElementById("winnermassage").className="main-slot-winner-good container pt-5";
};

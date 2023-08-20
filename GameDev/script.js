score=0;
cross=true;
  var video = document.getElementById("myVideo");
  // var video = document.getElementById("myVideo2");
document.onkeydown= function(e) {
    console.log("Key code is ",e.code )
    if(e.code=='ArrowUp'){
        girl=document.querySelector('.girl')
        girl.classList.add('animateGirl');
        setTimeout(()=>{
            girl.classList.remove('animateGirl')
        }, 700);
    }
    if(e.code=='ArrowRight'){
        girl=document.querySelector('.girl')
        girlX=parseInt(window.getComputedStyle(girl,null).getPropertyValue('left'));
        girl.style.left = girlX + 112+ "px";
    }
    if(e.code=='ArrowLeft'){
        girl=document.querySelector('.girl')
        girlX=parseInt(window.getComputedStyle(girl,null).getPropertyValue('left'));
        girl.style.left = (girlX - 112) + "px";
    }

}
setInterval(()=>{
girl=document.querySelector('.girl');
gameOver=document.querySelector('.gameOver');
obstacle=document.querySelector('.obstacle');

/*gives the computed value of x for the girl */
dx= parseInt(window.getComputedStyle(girl,null).getPropertyValue('left')); 
dy= parseInt(window.getComputedStyle(girl,null).getPropertyValue('top')); 

/*gives the computed value of x for the obstacle */
ox= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
oy= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left')); 

/*absolute difference */
offsetX=Math.abs(dx-ox);
offsetY=Math.abs(dy-oy); 
console.log(offsetX,offsetY)
if(offsetX < 310 && offsetY< 310){

    gameOver.style.visibility ='visible';
    obstacle.classList.remove('obstacleAni') 
}
else if (offsetX<145 && cross) {
    score+=1; 
    updateScore(score);
    cross=false;
    setTimeout(()=>{
        cross=true;
    },1000);
    aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
    newDur = aniDur-0.1;
    obstacle.style.animationDuration= newDur +'s';
}

},10);


function updateScore(score){
 scoreCont.innerHTML="Your Score: "+score   
}
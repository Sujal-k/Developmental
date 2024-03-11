/* All declared variables */
let timer = 60;
var rn = 0;
let score = 0;

/* Pure logic behind game*/

function makeBubble(){
    let clutter = "";

    for(i = 1; i<169; i++){
    let random_number = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${random_number}</div>`
    }

    document.querySelector('.middle-pannel').innerHTML = clutter;
}
function setTimer(){
    let timeint = setInterval(function(){

        if(timer>0){
            timer--;
            document.querySelector('#timer-val').textContent = timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector('.middle-pannel').innerHTML = `<h1>Game Over , Score is : ${score}</h1>`;
            newgame();
        }
       
    },1000)
}
function getNewHit(){
     rn = Math.floor(Math.random()*10);
    document.querySelector('#score-hit').innerHTML = rn;
}
function scoreincreaser(){
    score += 10;
    document.querySelector('#score').innerHTML = score;
}
function checker(){
document.querySelector('.middle-pannel').addEventListener('click',(dets)=>{
    let bubbleselected = Number(dets.target.textContent);
    if(bubbleselected === rn){
        scoreincreaser();
        makeBubble();
        getNewHit();
       }
})
}
/* All Function calls */
function calls(){
makeBubble();
setTimer();
getNewHit();
checker();
}
calls();

function makebutton(){
    var btn = document.createElement('div');
    
    // Add the class to the button
    btn.classList.add('btn_new_game');
    
    // Set the innerHTML of the button
    btn.innerHTML = '<h2>New Game</h2>';
    document.querySelector('.middle-pannel').appendChild(btn);

}
function newgame(){
    makebutton();
    document.querySelector('.btn_new_game').addEventListener('click',()=>{
        makeBubble();
        getNewHit();
        timer = 60;
        setTimer();
        score = 0;
        scoreincreaser();
        checker();
    })
   
}
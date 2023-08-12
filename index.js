console.log("working");

function makeBubble(){
               let clutter = "";

for(i = 1 ; i<=140; i++){
               let rn = Math.floor(Math.random()*10);
               clutter +=   `<div class="num">${rn}</div>`
}
document.querySelector("#bottom").innerHTML = clutter;
}
// so the creation part of the bubble is done now i have to make a function that decrease the timer and display it on the screen

let time = 60;
let score = 0 ;
let rand = 0 ;

function runTime(){
               let stopTime = setInterval(function(){
              if(time>0){
               time--;
               document.querySelector("#timer").innerText = time;
              }
              else{
                              document.querySelector("#bottom").innerHTML = `<h1 id = "heading-font">GAME OVER YOUR SCORE IS ${score}</h1>`;
                             clearInterval(stopTime);
                           
              }
               },1000)
}
// so the time function is also completed now i have to make a function that changes the number in the hit box so that everytime a new number shows up

function newHit(){
                rand = Math.floor(Math.random()*10);
                const hit = document.querySelector('#hit');
               hit.innerText = rand;
}

function increaseScore(){
               score+=10;
               document.querySelector('#score').innerText = score;

}

// okay so almost all the work is completed now i have to write a function tha executes the game so that it can be actually played so for that what i need i need a function that will start the game it inside it i need a event listner that is attached to all the bubbles with a event object so that i can target it then i need to compare it with the hit innerContent if they matches increase the score and after 60  second it should show game over and the final score so easy it should be done without the help 


makeBubble();
runTime();
newHit();


document.querySelector('#bottom').addEventListener("click",function(e){
               
               if(Number(e.target.innerText) === rand){
                              increaseScore();
                              makeBubble();
                              newHit();
               }

})

var randomNumber1 = Math.floor(Math.random()*6+1);//create a random number(1-6).
document.querySelectorAll("img")[0].setAttribute("src",'images/dice'+randomNumber1+'.png');//change left image to random image.
var randomNumber2 = Math.floor(Math.random()*6+1);//create another random number.
document.querySelectorAll("img")[1].setAttribute("src",'images/dice'+randomNumber2+'.png');//change right to random image.
if(randomNumber1>randomNumber2){document.querySelector("h1").textContent="player 1 wins"}//display text if player1 wins.
else if(randomNumber1<randomNumber2){document.querySelector("h1").textContent="player 2 wins"}//display text if player 2 wins.
else {document.querySelector("h1").textContent="draw"};//display text if there is a tie.
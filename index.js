
//for user 1
//Generate a random number from 1 to 6.
const firstRandomNum = Math.floor(Math.random() * 6) + 1;

//images/dice1.png upto images/dice6.png.
const firstDiceImage = 'pictures/images ' + firstRandomNum + '.png';

document
.querySelectorAll('img')[0]
.setAttribute('src', firstDiceImage);

//for user 2
//Generate a random number from 1 to 6.
const secondRandomNum = Math.floor(Math.random() * 6) + 1;

//images/dice1.png upto images/dice6.png.
const secondDiceImage = 'pictures/images ' + secondRandomNum + '.png';

document
.querySelectorAll('img')[1]
.setAttribute('src', secondDiceImage);
//Logic for winner
if(firstRandomNum > secondRandomNum){
        document.querySelector('h1').innerHTML='The winner is user 1';
}else if(firstRandomNum < secondRandomNum){
    document.querySelector('h1').innerHTML='the winner is user 2';
}
else{
    document.querySelector('h1').innerHTML='it is draw';
}

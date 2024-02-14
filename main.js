var yesButton = document.getElementById("yes");
var noButton = document.querySelector('#no');
var popup = document.getElementById("Popup");



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

noButton.onclick = function()
{
    noButton.style.transition = '0s';
    noButton.style.position = 'absolute';
    noButton.style.left = (getRandomInt(900) + 100)+ 'px';
    noButton.style.top =  (getRandomInt(900) + 100)+ 'px';

};

yesButton.onclick = function() {
    popup.classList.toggle("show");
}
/* Author: Joseph Gutierrez
   Date: 01/10/2024
*/


var container = document.getElementById('container');

function addParagraph(){
   for(var i = 0; i < 5; i++){
      var newParagraph = document.createElement('p');
      newParagraph.innerHTML = "This is the " + i + " p elment";
      container.appendChild(newParagraph);
   }
};
addParagraph();

function changeBackground(){
   var backgroundBody = document.getElementsByTagName('body')[0];
   console.log(backgroundBody);
   backgroundBody.style.backgroundColor = "gray";
   container.style.backgroundColor = "white";
}

var button = document.getElementById('changeColor');
button.addEventListener("click", function(){
   changeBackground();
});
const rowOne = document.getElementById("row-one")
const rowTwo = document.getElementById("row-two")
const rowThree = document.getElementById("row-three")
const rowFour = document.getElementById("row-four")
const rowFive = document.getElementById("row-five")

const colors = ["#18213f", "#1e2747"];
let index = 0;




rowOne.addEventListener('click', function(){
  rowOne.style.backgroundColor = colors[index];
  index = index >= colors.length - 1 ? 0 : index +1;
})

rowTwo.addEventListener('click', function(){
  rowTwo.style.backgroundColor = colors[index];
  index = index >= colors.length - 1 ? 0 : index +1;
})

rowThree.addEventListener('click', function(){
  rowThree.style.backgroundColor = colors[index];
  index = index >= colors.length - 1 ? 0 : index +1;
})

rowFour.addEventListener('click', function(){
  rowFour.style.backgroundColor = colors[index];
  index = index >= colors.length - 1 ? 0 : index +1;
})

rowFive.addEventListener('click', function(){
  rowFive.style.backgroundColor = colors[index];
  index = index >= colors.length - 1 ? 0 : index +1;
})





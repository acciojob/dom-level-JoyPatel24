//your JS code here. If required.
// script.js
const element = document.getElementById("level");
let level = 0;

if (element) {
  let currentNode = element;
  while (currentNode.parentElement) {
    level++;
    currentNode = currentNode.parentElement;
  }
}

alert(`The level of the element is: ${level}`);

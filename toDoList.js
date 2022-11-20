// If an li element is clicked, toggle the class "done" on the <li>

// If a delete link is clicked, delete the li element / remove from the DOM

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

const addElement = function(e) {
  
  // create a li element with a <span> child and an <a> child 
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newA = document.createElement("a");

  // pull the value of the input next to the add-item class element & add to the new <span> element
  newSpan.innerHTML = e.srcElement.parentNode.getElementsByTagName("input")[0].value;
  
  // yargh, can't get this to work right now...
  //newSpan.innerHTML = e.nextSibling.value;

  // add class name/eventlistenier/text to <a>
  newA.className = "delete";
  newA.innerHTML = "Delete";
  newA.addEventListener("click", removeListItem);
  
  // append the <span> and <a> elements to the list element
  newLi.appendChild(newSpan);
  newLi.appendChild(newA);

  // display the new list element in the DOM
  document.getElementsByTagName('ul')[0].appendChild(newLi);
  console.log(newLI.matches(".container"));

  // puts it at the end 
  //document.lastChild.appendChild(newLi); 

  
  //not quite there 
  //e.srcElement.parentNode.insertBefore(newLi, e.nextSibling);

  //will return the <a>
  //console.log(e.srcElement);

  // will return the <div> class with the user input
  //console.log(e.srcElement.parentNode);

  // returns main...
  //console.log(e.srcElement.parentNode.parentNode);

  // this looks right...
  //console.log(document.getElementsByTagName('ul')[0].lastElementChild);

  // works as long as nothing is null
  //document.getElementsByTagName('ul')[0].lastElementChild.appendChild(newLi);

  /*
  if (document.getElementsByTagName('ul')[0].lastElementChild != null) {
    //document.getElementsByTagName('ul')[0].lastElementChild.appendChild(newLi);
    document.getElementsByTagName('ul')[0].appendChild(newLi);
  } else {document.getElementsByTagName('ul')[0].appendChild(newLi);}
  */

  
  
  
  //e.srcElement.parentNode.lastChild.appendChild(newLi);
  //document.getElementsByTagName('ul')[0].lastElementChild.appendChild(newContent);
  //document.lastElementChild.appendChild(newContent);
  /*
  // and give it some content
  const newContent = document.getElementsByClassName('add-item')[0].getInnerHTML();
  console.log(document.getElementsByClassName('add-item')[0].getInnerHTML());
  newLi.innerHTML = newContent;

  // add the text node to the newly created div
  e.parentNode.appendChild(newLi);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
  */
  //console.log(e.srcElement.parentNode.getElementsByTagName("input")[0].value);
  //console.log(e.srcElement.parentNode.getInnerHTML());
}




//document.getElementsByClassName("delete")[0].parentNode;
const removeListItem = function(e){
  // remove the list item; the parent of the .delete class of <a>, the child of the list
  this.parentNode.remove();
  
}

// add the initial html item in the list to the EventListener
/*
document.getElementById("initial-item");
console.log(document.getElementById("initial-item"));
console.log(document.getElementById("initial-item").childNodes[0]);
console.log(document.getElementById("initial-item").childNodes[1]);
console.log(document.getElementById("initial-item").childNodes[3]);
//document.getElementById("initial-item").parentNode.childNodes[0].getElementsByTagName('delete')[0].addEventListener("click", removeListItem);
*/
document.getElementById("initial-item").childNodes[3].addEventListener("click", removeListItem);
//console.log(document.getElementsByClassName('today-list')[0].lastElementChild);
document.getElementsByClassName('add-item')[0].addEventListener('click', addElement);
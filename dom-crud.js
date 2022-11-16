// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" 
let buyNow = document.createElement('a');
buyNow.innerHTML = "Buy Now!";
buyNow.id = 'cta';
// after the last <p>
document.getElementsByTagName('p')[(document.getElementsByTagName('p').length - 1)].parentNode.append(buyNow);

// Access (read) the data-color attribute of the <img>,
// log to the console
Array.from(document.getElementsByTagName("img")).forEach(item => console.log(`color: ${item.getAttribute('data-color')}`));

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
document.getElementsByTagName('li')[2].className = "highlight";

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
document.getElementsByTagName('p')[(document.getElementsByTagName('p').length - 1)].remove();
console.log('Contentscript injected');

// just use the 'section' and query it later
const section = document.querySelector(
    '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section'
) 
const parentElement = section.querySelector('h1');
const questionElement = section.querySelector('div:nth-child(3)');

// get the data from the DOM
const txt = questionElement.querySelector("p:nth-child(2)").innerHTML;
const bdg = questionElement.querySelector("p:nth-child(3)").innerHTML;

const injectedText = document.createTextNode(`${txt}: ${bdg}`);


// Button element 
let button = document.createElement('button');

// Button hard-coded styling
button.style.background = '#323c4e';
button.style.color = 'white';
button.style.fontSize = '0.5em';
button.style.padding = '10px';
button.style.fontWeight = 'bold';
button.style.border = 'None';
button.style.borderRadius = '10px';
button.style.margin = '3px 0 0 0';

button.appendChild(injectedText);

// Popup element with more information
let popup = document.createElement('div');

// Popup hard-coded styling
popup.style.display = "None"; // hidden at first
popup.style.border = '2px solid #2156c1';
popup.style.borderRadius = '10px';
popup.style.background = 'white';
popup.style.margin = '3px 0 0 3px';
popup.style.width = '50vmax';
popup.style.padding = '1em';
popup.style.fontSize = '0.5em';

// the dummy data to show
// FIXME: this should be fetched, not here though
const dummyClimateData = document.createTextNode(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.`)

popup.appendChild(dummyClimateData);


// Button hover functionality
button.onmouseenter = () => {
    popup.style.display = "block";
}
button.onmouseleave = () => {
    popup.style.display = "None";
}

parentElement.appendChild(button);
parentElement.appendChild(popup);


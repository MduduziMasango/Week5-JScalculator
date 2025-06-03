// Refrence Display element
const display = document.getElementById('display');

// Track if we have performed a claculation
let justCalculated = false;

function appendToDisplay(value) {
    console.log('Button pressed:', value);

    alert('You pressed: ' + value);
}

function clearDisplay() {
    console.log('Clear button pressed.');

    alert('Clear button was Clicked');
}

function deleteLast() {
    console.log('Backspace button pressed.');

    alert('Delete button was pressed')
}

function calculate() {
    console.log('Equals button pressed.');

    alert('Equals button pressed');
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Calculator loaded successfully');
    console.log('Display element', display);

    if(display) {
        console.log('Current display value: ', display.value);
    } else {
        console.log('Display element not found');
    }
})
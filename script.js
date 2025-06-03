// Refrence Display element
const display = document.getElementById('display');

// Track if we have performed a claculation
let justCalculated = false;

function appendToDisplay(value) {
    console.log('Button pressed:', value);
    let currentValue = display.value;
    if (justCalculated && !isNaN(value)) {
        display.value = value;
        justCalculated = false;
        return;
    }

        // If current display show 0 and user enters a number, we want to replace the 0
        if (currentValue === '0' && !isNaN(value)) {
            display.value = value
        } else if(currentValue === '0' && value === '.') {
            display.value = currentValue + value;
        } else {
            display.value = currentValue + value;
        }


        // reset the justCalculated flag when user starts typing
        justCalculated = false;
        
        console.log('Display updated to: ', display.value);
}

function clearDisplay() {
    console.log('Clear button pressed.');

    alert('Clear button was Clicked');
}

function deleteLast() {
    console.log('Backspace button pressed.');
    let currentValue = display.value;

    // if there's only one charecter or its 0, reset to 0
    if (currentValue.length <= 1 || currentValue === '0') {
        display.value = '0';
    } else {
        display.value = currentValueslice(0, -1);
    }

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
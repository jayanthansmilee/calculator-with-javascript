 const display = document.querySelector('input[name="dispaly"]');
const buttons = document.querySelectorAll('.btn');

 buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === '=') {
            // Evaluate the expression in the display field
            display.value = eval(display.value);
        } else if (value === 'c') {
            // Clear the display field
            display.value = '';
        } else {
             display.value += value;
        }
    });
});

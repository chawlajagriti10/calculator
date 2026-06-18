let input = document.querySelector('input');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach((button) => {

    button.addEventListener('click', (e) => {

        let value = e.target.innerHTML.trim();

        // Equal button
        if (value === '=') {

            try {
                string = eval(string).toString();
                input.value = string;
            }

            catch {
                input.value = "Error";
                string = "";
            }
        }

        // Clear all
        else if (value === 'AC') {

            string = "";
            input.value = string;
        }

        // Backspace
        else if (value === '❌') {

            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        // Plus / Minus
        else if (value === '+/-') {

            if (string !== "") {
                string = (-eval(string)).toString();
                input.value = string;
            }
        }
        else if (value === '%') {

             string = (eval(string) / 100).toString();
             input.value = string;
        }

        // Normal buttons
        else {
            if (value === '÷') {
            string += '/';
        }
           else {
            string += value;
        }
             input.value = string;
             }

    });

});
const form = document.querySelector("form");
const bill = document.querySelector("#bill"); // input
const people = document.querySelector("#people");// input
const tipp = document.querySelector(".tipp");
const personn = document.querySelector(".personn");
const buttons = document.querySelectorAll(".tip>button");
const custom = document.querySelector("#custom");
const label1 = document.querySelector('label[for="errorbill"]');
const label2 = document.querySelector('label[for="errorpeople"]');
const submit_button = document.querySelector('.calculator button');
let button_data = 0;
let counter_bill = 0;
let counter_b_error = 0;
let counter_people = 0;
let counter_p_error = 0;
let counter_button = 0;
let key = 0;
let bill_virginity = 0;
let people_virginity = 0;

bill.addEventListener("input", (e) => {
    bill.style.outlineColor = "hsl(172, 67%, 45%)";
    submit_button.style.backgroundColor = "hsl(172, 67%, 45%)";
    console.log("bill");
    counter_people = 0;
    if (counter_b_error == 1) {
        label1.classList.toggle('be');
        counter_b_error = 0;
    }
    if (counter_bill == 0) {
        counter_bill = 1;
        setTimeout(() => {
            if (bill.value != "" && people.value == "" && (button_data == 0 || custom.value == "")) {
                // label1.classList.toggle('be');

                if (counter_p_error == 0) {
                    label2.classList.toggle('pe');
                    people.style.outline = "2px solid red";
                    counter_p_error = 1;
                }
            }
        }, 5000);

    }
    bill_virginity = 1;
    if ((people.value != "" && (button_data != "" || custom.value != "")) && bill.value != "") {
        tipp.innerText = '$' + Math.trunc((bill.value / people.value * (button_data / 100)) * 100) / 100;
        personn.innerText = '$' + Math.trunc(((parseFloat(bill.value) + parseFloat(tipp.innerText.replace('$', '') * 5)) / 5) * 100) / 100;
        console.log("inside if");
        console.log(bill.value);
        // for positive numbers, you can use Math.trunc:
        // Math.trunc(raw * 100) / 100;
        console.log(Math.trunc((bill.value / people.value * (button_data / 100)) * 100) / 100);
    }
});

bill.addEventListener('keyup', (e) => {
    if (e.key == 'Backspace' && bill.value == "" && bill_virginity == 1) {
        console.log("bill_virginty");
        console.log(e.key);
        label1.classList.toggle('be');
        bill.style.outline = "2px solid red";
        counter_b_error = 1;
    }
})
bill.addEventListener("focus", (e) => {
    bill.style.outlineColor = "hsl(172, 67%, 45%)";
})

people.addEventListener("input", (e) => {
    counter_bill = 0;
    submit_button.style.backgroundColor = "hsl(172, 67%, 45%)";
    // shut the error
    if (counter_p_error == 1) {
        label2.classList.toggle('pe');
        counter_p_error = 0;
    }
    people.style.outlineColor = "hsl(172, 67%, 45%)";
    console.log("people");
    // when typing this shoulde be checked once
    if (counter_people == 0) {
        counter_people = 1;
        setTimeout(() => {
            if (people.value != "" && bill.value == "" && (button_data == 0 || custom.value == "")) {
                // label1.classList.toggle('be');
                if (counter_b_error == 0) {
                    label1.classList.toggle('be');
                    bill.style.outline = "2px solid red";
                }

            }
        }, 5000);

    }
    people_virginity = 1;
    if ((people.value != "" && (button_data != "" || custom.value != "")) && bill.value != "") {
        tipp.innerText = '$' + Math.trunc((bill.value / people.value * (button_data / 100)) * 100) / 100;
        personn.innerText = '$' + Math.trunc(((parseFloat(bill.value) + parseFloat(tipp.innerText.replace('$', '') * 5)) / 5) * 100) / 100;
        console.log("inside if");
        console.log(bill.value);
        // for positive numbers, you can use Math.trunc:
        // Math.trunc(raw * 100) / 100;
        console.log(Math.trunc((bill.value / people.value * (button_data / 100)) * 100) / 100);
    }
})

people.addEventListener('keyup', (e) => {
    if (e.key == 'Backspace' && people.value == "" && people_virginity == 1) {
        console.log("bill_virginty");
        console.log(e.key);
        label2.classList.toggle('pe');
        people.style.outline = "2px solid red";
        counter_p_error = 1;
    }
})
people.addEventListener("focus", (e) => {
    people.style.outlineColor = "hsl(172, 67%, 45%)";
})


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form")
});

buttons.forEach((button) => {

    button.addEventListener("click", (e) => {
        submit_button.style.backgroundColor = "hsl(172, 67%, 45%)";
        if (custom.value != "") {
            custom.value = "";
        }
        button_data = Number(e.target.innerText.replace("%", ""));
        console.log(button_data)
        buttons.forEach((buttonn) => {
            buttonn.style.backgroundColor = "hsl(183, 100%, 15%)";
            buttonn.style.color = "hsl(0, 100%, 100%)";
        })
        e.target.style.backgroundColor = "hsl(172, 67%, 45%)";
        e.target.style.color = "black";

        // counter_bill = 0;
        // if (counter_p_error == 1) {
        //     label2.classList.toggle('pe');
        //     counter_p_error = 0;
        // }
        people.style.outlineColor = "hsl(172, 67%, 45%)";
        console.log("people");
        if (counter_button == 0) {
            counter_button = 1;
            setTimeout(() => {
                if (people.value == "" && bill.value == "" && (button_data != 0 || custom.value == "")) {
                    // label1.classList.toggle('be');
                    label1.classList.toggle('be');
                    label2.classList.toggle('pe')
                    bill.style.outline = "2px solid red";
                    people.style.outline = "2px solid red";
                    counter_p_error = 1;
                    counter_b_error = 1;

                }
            }, 5000);

        }

        if ((people.value != "" && (button_data != "" || custom.value != "")) && bill.value != "") {
            tipp.innerText = '$' + Math.trunc((bill.value / people.value * (button_data / 100)) * 100) / 100;
            personn.innerText = '$' + Math.trunc(((parseFloat(bill.value) + parseFloat(tipp.innerText.replace('$', '') * 5)) / 5) * 100) / 100;
            console.log("inside if");
            console.log(bill.value);
            // for positive numbers, you can use Math.trunc:
            // Math.trunc(raw * 100) / 100;
            console.log(Math.trunc((bill.value / people.value * (button_data / 100)) * 100) / 100);
        }

    });
});

custom.addEventListener('input', (e) => {
    submit_button.style.backgroundColor = "hsl(172, 67%, 45%)";
    e.preventDefault();
    console.log("custom_input");
    if (button_data != 0) {
        buttons.forEach((button) => {
            button.style.backgroundColor = "hsl(183, 100%, 15%)";
            button.style.color = "hsl(0, 100%, 100%)";
        });
    };

    if (key == 0 && (/^[0-9%]+$/.test(custom.value)) && (custom.value.replace('%', '') >= 0 || custom.value.replace('%', '') <= 100)) {
        console.log('pre.custom.v is', e.key);
        console.log("pattern", /^[0-9%]+$/.test(custom.value))
        custom.value = custom.value.replace('%', '') + "%";
        console.log('custom.v is', custom.value);
        button_data = parseInt(custom.value);
    } else if ((/^[0-9%]+$/.test(custom.value)) == false) {
        custom.value = "";
        button_data = 0;
        // custom.value=custom.value.slice(0, -2) +custom.value.slice(-1);
    }
    if ((people.value != "" && (button_data != "" || custom.value != "")) && bill.value != "") {
        tipp.innerText = '$' + Math.trunc((bill.value / people.value * (button_data / 100)) * 100) / 100;
        personn.innerText = '$' + Math.trunc(((parseFloat(bill.value) + parseFloat(tipp.innerText.replace('$', '') * 5)) / 5) * 100) / 100;
        console.log("inside if");
        console.log(bill.value);
        // for positive numbers, you can use Math.trunc:
        // Math.trunc(raw * 100) / 100;
        console.log(Math.trunc((bill.value / people.value * (button_data / 100)) * 100) / 100);
    }

})
custom.addEventListener('keydown', (e) => {
    console.log('custom cicked');
    if (e.key == 'Backspace') {
        key = 1;
    } else {
        key = 0;
    }

})
submit_button.addEventListener('click',(e)=>{
    form.reset();
})
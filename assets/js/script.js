//script

// mail verification 


//array made of mails
const e_mails = ['giovanni.rana@yahoo.it', 'simone.moretti.944@gmail.com', 'maremma.maiala@aruba.com'];


//linking input
const input_mail = document.querySelector('input#mail_input');

//linking submit button
const button_click = document.querySelector('button#mail_submit');

//linking p_verification output
const verification = document.querySelector('p#p_verification');

//simone.moretti.944@gmail.com



//button click listener
button_click.addEventListener('click', function() {

    //verifying values received
    console.log('input: ',input_mail.value, ' button: ', button_click.innerHTML, ' p verification: ', verification.innerHTML);

    //declaring counter for utility purpose
    let c = -1;

    //iterating on the array
    for (let i = 0; i < e_mails.length; i ++) {
        console.log('actual mail: ',e_mails[i]);
        
        //if in order to verify input ad array index
        if (input_mail.value === e_mails[i]) {
            c = i;
        }
    }
    
    // c = parseInt(c + 1);
    console.log('c: ',c);
    if (c > -1) {
        verification.innerHTML = `${input_mail.value} found at position #${c}`;
        
    }
    else {
        verification.innerHTML = `${input_mail.value} not found`;   
     }
        
        console.log('array length: ', e_mails.length, ' c:', c);
    }
    )


//math random from 1 to 6 test
// console.log(Math.floor(Math.random()*6 + 1));

//simone.moretti.944@gmail.com

//Dices game

//Getting input number
const input_chosen_n = document.querySelector('input#input_chosen_n');

//Getting p user choosed
const output_user_chosen_n = document.querySelector('p#user_chosen_n');

//Getting p java choosed
const output_java_chosen_n = document.querySelector('p#java_chosen_n');

//Getting p winner
const winning_p = document.querySelector('p#dice_output');


//getting button submit
const button_number_submit =  document.querySelector('button#number_submit');

console.log('empty input: ', input_chosen_n, ' ouput_user: ', output_user_chosen_n, ' output_java: ', output_java_chosen_n, ' button_submit: ',button_number_submit, ' p_winner: ', winning_p);

button_number_submit.addEventListener('click', function() {

    //verifying if event listener works
    console.log('Event listener works!');

    const java_n = Math.floor(Math.random()*6 + 1);
    console.log('verifying java_n: ', java_n);

    //showing numbers on screen
    output_user_chosen_n.innerHTML = `${input_chosen_n.value}`;
    output_java_chosen_n.innerHTML = `${java_n}`;
    //showing numbers on console
    console.log('outuput_user: ', output_user_chosen_n.innerHTML, ' output_java: ',output_java_chosen_n);

    //Comparing numbers

    if (input_chosen_n.value > java_n) {
        winning_p.innerHTML = `${input_chosen_n.value} > ${java_n}, user wins!`
    }
    else if (input_chosen_n.value < java_n) {
        winning_p.innerHTML = `${input_chosen_n.value} < ${java_n}, java wins!`
    }
    else {
        winning_p.innerHTML = `They're the same, no winners, no losers!`
    }

    console.log('That\'s the end, bis bald!');
})

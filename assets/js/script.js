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

    //iterating on the array
    for (let i = 0; i <= (e_mails.length - 1); i ++) {
        console.log('actual mail: ',e_mails[i]);
        
        //if in order to verify input ad array index
        if (input_mail === e_mails[i]) {
            verification.innerHTML = `${input_mail.value}` + `found at position #${i}`;
        }
        else {
            continue;
        }
    }

})




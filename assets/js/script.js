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



// console.log(Math.floor(Math.random()*6 + 1));

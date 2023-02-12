//  step-1 : Add event handler in submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2 : Get email Address in input field
    //  Use .value to get values from input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // Step-3 : Get password
    /*
    a. set id on html element
    b. Get the element
    c. Get the value from the element  
    */
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // Warning :   Do not verify email/password on teh client side

    //  Step-4 : Verify Email and Password
    if (email == 'sample@gmail.com' && password == 'secret') {
        console.log('Valid User');
    }
    else {
        alert('Invalid User');
    }

})


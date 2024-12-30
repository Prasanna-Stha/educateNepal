// let label = document.getElementsByClassName("inputBoxDescription");           //get labelBox
// let inputBox = document.getElementsByClassName("inputField");           //get inputField
// let emailBox=document.getElementsByClassName('emailBox').value;              //get emailBox

// $(document).ready(function () {
//     $('.signUpBtn').click(function () {              
//         $('.formBox').css('background-color', '#007FFF');
//         $('.logInTitle, .form, .signUpBtn, .logo').hide(700);      //hide the login form 
//         $('.signUpForm, .signUpTitle').slideDown('slow');       //signUp form slides into the screen
//     });

//     $('.logInRedirect').click(function () {              
//         $('.formBox').css('background-color', '#007FFF');
//         $('.signUpTitle, .signUpForm, .signUpBtn').hide(700);      //hide the signUp form 
//         $('.form, .logInTitle').slideDown('slow');       //logIn form slides into the screen
//         $('.logo, .signUpBtn').show(700);
//     });

//     $('.inputField').focus(function () {            //label text in its original position when focused
//         $(this).prev('.inputBoxDescription').css({
//             position: 'relative',
//             top: '0',
//             fontSize: '12px'
//         });
//     });

//     $('.inputField').blur(function () {             //label text inside the input field when out of focus
//         if ($(this).val() === '') {
//             $(this).prev('.inputBoxDescription').css({
//                 position: 'relative',
//                 top: '30px',
//                 fontSize: '14px'
//             });
//         }
//     });


//     //input field validation from here....

//     $('.fName, .mName, .lName').change(function(){                 
//         if($(this).val().length<=3){            //checks the lenght of input characters 
//             $(this).css({
//                 border: '2px solid red',
//                 borderRadius: '5px',
//                 transition: '.2s linear'
//             })
//         }
//         else{
//             $(this).css({
//                 border: 'none',
//                 borderBottom: '1px solid grey'
//             })
//         }
//     })
//     $('emailBox').change(function(){
//         if($(this).length<3){
//             alert("Dnager");
//         }
//     })

// });

document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const signUpBtn = document.querySelector('.signUpBtn');
    const logInRedirect = document.querySelector('.logInRedirect');
    const inputFields = document.querySelectorAll('.inputField');
    const fName = document.querySelectorAll('.fName');
    const mName = document.querySelectorAll('.mName');
    const lName = document.querySelectorAll('.lName');
    const emailBox = document.querySelector('.emailBox');

    // Sign up button click event
    signUpBtn.addEventListener('click', function() {
        document.querySelector('.formBox').style.backgroundColor = '#007FFF';
        document.querySelector('.logInTitle').style.display = 'none';
        document.querySelector('.form').style.display = 'none';
        document.querySelector('.signUpBtn').style.display = 'none';
        document.querySelector('.logo').style.display = 'none';
        document.querySelector('.signUpForm').style.display = 'block';
        document.querySelector('.signUpTitle').style.display = 'block';
    });

    // Log in redirect button click event
    logInRedirect.addEventListener('click', function() {
        document.querySelector('.formBox').style.backgroundColor = '#007FFF';
        document.querySelector('.signUpTitle').style.display = 'none';
        document.querySelector('.signUpForm').style.display = 'none';
        document.querySelector('.signUpBtn').style.display = 'none';
        document.querySelector('.form').style.display = 'block';
        document.querySelector('.logInTitle').style.display = 'block';
        document.querySelector('.logo').style.display = 'block';
        document.querySelector('.signUpBtn').style.display = 'block';
    });

    // Label positioning on focus and blur
    inputFields.forEach(function(inputField) {
        inputField.addEventListener('focus', function() {
            const label = this.previousElementSibling;
            label.style.position = 'relative';
            label.style.top = '0';
            label.style.fontSize = '12px';
        });

        inputField.addEventListener('blur', function() {
            const label = this.previousElementSibling;
            if (this.value === '') {
                label.style.position = 'relative';
                label.style.top = '30px';
                label.style.fontSize = '14px';
            }
        });
    });

    // Input field validation
    const validateField = (field) => {
        if (field.value.length <= 3) {
            field.style.border = '2px solid red';
            field.style.borderRadius = '5px';
            field.style.transition = '.2s linear';
        } else {
            field.style.border = 'none';
            field.style.borderBottom = '1px solid grey';
        }
    };

    fName.forEach(field => field.addEventListener('change', () => validateField(field)));
    mName.forEach(field => field.addEventListener('change', () => validateField(field)));
    lName.forEach(field => field.addEventListener('change', () => validateField(field)));

    // Email box validation
    emailBox.addEventListener('change', function() {
        if (this.value.length < 3) {
            alert("Danger");
        }
    });
});
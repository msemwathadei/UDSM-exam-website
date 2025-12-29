const form=document.getElementById('form')
const fullname_input=document.getElementById('fullname-input')
const regNum_input=document.getElementById('regNum-input')
const email_input=document.getElementById('email-input')
const password_input=document.getElementById('password-input')
const repeatPassword_input=document.getElementById('repeat-password-input')
const error_message=document.getElementById('error-message')

form.addEventListener('submit', (e) => {
    
    let errors=[]

    if(fullname_input){
        //If we have a full name input then we are in the signup page
        errors=getSignupFormErrors(fullname_input.value, regNum_input.value, email_input.value, 
            password_input.value, repeatPassword_input.value)
    }
    else{
        //If we don't have a full name input then we are in the login page
        errors=getLoginFormErrors(regNum_input.value, password_input.value)
    }

    if(errors.length>0){
        //If there are any errors
        e.preventDefault()
        error_message.innerText=errors.join(", ")
    }
})

function getSignupFormErrors(fullname, regNum, email, password, repeatPassword){
    let errors=[]

    if(fullname==='' || fullname==null){
        errors.push('Full name is required')
        fullname_input.parentElement.classList.add('incorrect')
    }

    if(regNum==='' || regNum==null){
        errors.push('Registration number is required')
        regNum_input.parentElement.classList.add('incorrect')
    }

    if(email==='' || email==null){
        errors.push('Email is required')
        email_input.parentElement.classList.add('incorrect')
    }

    if(password==='' || password==null){
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }

    /*if(repeatPassword==='' || repeatPassword==null){
        errors.push('Repeat Password is required')
        repeatPassword_input.parentElement.classList.add('incorrect')
    }*/

    if(password.length<8){
        errors.push('Password must have at least 8 characters')
        password_input.parentElement.classList.add('incorrect')
    }

    if(password!=repeatPassword){
        errors.push('Password does not match repeated password')
        password_input.parentElement.classList.add('incorrect')
        repeatPassword_input.parentElement.classList.add('incorrect')
    }

    return errors;

}

function getLoginFormErrors(regNum, password){
    let errors=[]

    if(regNum==='' || regNum==null){
        errors.push('Registration number is required')
        regNum_input.parentElement.classList.add('incorrect')
    }

    if(password==='' || password==null){
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }


    return errors;
}

const allInputs=[fullname_input, regNum_input, email_input, password_input, repeatPassword_input].filter(input => input != null)

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText=''
        }
    })
})
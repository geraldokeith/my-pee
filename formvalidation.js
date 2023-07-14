const validate=()=>{
    // picking input fields with their names or ids.
    let FirstName = document.signupnow.firstname
    let LastName = document.signupnow.lastname
    let phone = document.signupnow.phone
    let email = document.signupnow.email
    



// Picking error fields
let firstNameError = document.getElementById("firstname-error")
let lastNameError = document.getElementById("lastname-error")
let phoneError = document.getElementById("phone-error")
let EmailError = document.getElementById("Email-error")



// validation fullname input fields.
// validating for emptyness errors
if(FirstName.value ==""){
   FirstName.style.border = "2px solid green";
   firstNameError.textContent = "first name is required";
   firstNameError.style = "color: blue; font-size:11px; font-family:Helvetica,Arial,sans-serif;";
   FirstName.focus();
   return false;
}

else if (FirstName.value.length <2 ){
    FirstName.style.border = "2px solid red";
    firstNameError.textContent = "First name must be at least 2 characters";
    firstNameError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    FirstName.focus();
    return false;
}
else if (FirstName.value.length >15){
    FirstName.style.border = "1px solid red";
    firstNameError.textContent = "First name must no be greater than 15 characters";
    firstNameError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    FirstName.focus();
    return false;
}
else{
    FirstName.style.border = "1px solid green";
    firstNameError.textContent = "";
    FirstName.focus(); 
}

if(LastName.value == ""){
    LastName.style.border = "1px solid red";
    lastNameError.textContent = "Last name is required";
    lastNameError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    LastName.focus();
    return false;
}
else if (LastName.value.length <2 ){
    LastName.style.border = "2px solid red";
    lastNameError.textContent = "First name must be at least 2 characters";
    lastNameError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    LastName.focus();
    return false;
}
else if (LastName.value.length >15){
    LastName.style.border = "1px solid red";
    lastNameError.textContent = "First name must no be greater than 15 characters";
    lastNameError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    LastName.focus();
    return false;
}
else{
    LastName.style.border = "1px solid green";
    lastNameError.textContent = "";
    LastName.focus(); 
}

// Validating Phone number.
if(phone.value == ""){
    phone.style.border = "1px solid red";
    phoneError.textContent = "Phone number is required";
    phoneError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    phone.focus();
    return false; 
}
// let phoneRegex = /^[+][2][5][6][0-9]{9}$/


 if(!phone.test(phone.value)){
     phone.style.border = "1px solid red";
         phoneError.textContent = "Phone number should start with +256";
         phoneError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        phone.focus();
        return false;
 }
// validation for Email
if(email.value == ""){
    email.style.border = "1px solid red";
    EmailError.textContent = "Email is required";
    EmailError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    email.focus();
    return false;
}
let EmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if(!email.value.match(EmailRegex)){
    email.style.border = "1px solid red";
    EmailError.textContent = "The email address should be valid";
    EmailError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    email.focus();
    

}
}


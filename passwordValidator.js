function passwordValidator(password,confirmPassword) {
if(password===confirmPassword){
    console.log("Password Matched.Password validation Successful");
}
else{
    console.log("Password didnt Matched.Password validation Unsuccessful");
}

}
const enteredPassword = "password";
const confirmedPassword = "confirmPassword";
passwordValidator(enteredPassword,confirmedPassword); 
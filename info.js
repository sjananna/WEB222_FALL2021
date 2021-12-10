
function validateForm() {
    var firstname = document.signup.firstname.value;
    var lastname = document.signup.lastname.value;
    var password = document.signup.password.value;
    var passwordconf = document.signup.passwordconf.value;
    var username = document.signup.username.value;
    var education = document.signup.education.value;
    var age = document.signup.age.value;
    var firstnameErr = lastnameErr = passwordErr = passwordconfError = usernameErr =educationErr = emailErr = ageErr = true;


    

    
    function showError(field, message) {
    document.getElementById(field).innerHTML = message;
    }
 
    
    if(!firstname.match(/^[A-Z]/)) {
    showError("firstnameErr", "First letter should be capital for First Name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(firstname) === false) {
        showError("firstnameErr", "Enter your first name");
        } else {
          showError("firstnameErr", "");
          firstnameErr = false;
        }
    }
    



    if(!lastname.match(/^[A-Z]/)) {
       showError("lastnameErr", "First letter should be capital for Last Name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lastname) === false) {
        showError("lastnameErr", "Only alphabets are allowed to input for last name");
        } else {
          showError("lastnameErr", "");
          lastnameErr = false;
        }
    }



    
    if(password == "") {
        showError("passwordErr", "Password is required");
    } else { 
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
    }
        
     
        

        
        if(password.length<=6) {
            showError("passwordErr", "Password length must be atleast 6 characters");
        } else if(!password.match(upperCaseLetters)) {
            showError("passwordErr", "The password must contain at least 1 uppercase letter");
             
        }else if(!password.match(numbers)){
            showError("passwordErr", "The password must contain atleast 1 digit");
        }
        else{
            showError("passwordErr", "");
            passwordErr = false;
        }
    




    if(passwordconf == "") {
        showError("passwordconfErr", "Password confirmation is required");
    } 
    else if(password != passwordconf) {
            showError("passwordconfErr", "The password is not matched");
        } 
        else {
            showError("passwordconfErr", "");
            passwordconfErr = false;
        }
   




 

        if(username == "") {
            showError("usernameErr", "Username is required");
        } else { 
            
                 
            if(username.length<=6) {
                showError("usernameErr", "Username must be atleast 6 characters");
            } else if(username.charAt(0) != username.charAt(0).toUpperCase()){
                showError("usernameErr", "First character must be capital");
            }
            else {
                showError("usernameErr", "");
                usernameErr = false;
            }
        }
    
    




    if(education == "") {
        showError("educationErr", "Education status need to be selected");
    } else { 
            showError("educationErr", "");
            educationErr = false;
        
    }



    if(age == "") {
        showError("ageErr", "Age field is required");
    } else if(age>60 || age<18) {
            showError("ageErr", "Valid age must be between 18 to 60");
        } 
        else {
            showError("ageErr", "");
            ageErr = false;
        }

        
if((firstnameErr || lastnameErr || passwordErr|| passwordconfErr|| educationErr|| usernameErr|| ageErr) == true) {
    return false;
 } else{
     alert("SUCCESS");
     return true;}
 }
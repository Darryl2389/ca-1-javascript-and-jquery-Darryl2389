$(document).ready (function(){
  console.log("form ready");

  $('input#first_name').on("blur", validateFirstName);
  $('input#last_name').on("blur", validateLastName);
  $('input#input_email').on("blur", validateEmail);
  $('input#input_address').on("blur", validateAddress);
  $('input#input_password').on("blur", validatePassword);


  function validateFirstName(){
      let firstNameField=$('#first_name');
      let firstNameError=$('#first_name').parent().siblings().find('span.error');
      if(!firstNameField[0].validity.valid){
          if(firstNameField[0].validity.valueMissing) {
              firstNameError[0].textContent = 'You need to enter your first name.';
          }  else if(firstNameField[0].validity.tooLong) {
              firstNameError[0].textContent = `Name cannot be longer than ${ firstNameField[0].maxLength }.`;
          }
          firstNameField.removeClass('is-valid');
          firstNameField.addClass('is-invalid');
      } else {
          firstNameError[0].textContent = '';
          firstNameField.removeClass('is-invalid');
          firstNameField.addClass('is-valid');
      }
  }

  function validateLastName(){
    let lastNameField=$('#last_name');
    let lastNameError=$('#last_name').parent().siblings().find('span.error');
    if(!lastNameField[0].validity.valid){
        if(lastNameField[0].validity.valueMissing) {
            lastNameError[0].textContent = 'You need to enter your last name.';
        }  else if(lastNameField[0].validity.tooLong) {
            lastNameError[0].textContent = `Name cannot be longer than ${ lastNameField[0].maxLength }.`;
        }
        lastNameField.removeClass('is-valid');
        lastNameField.addClass('is-invalid');
    } else {
        lastNameError[0].textContent = '';
        lastNameField.removeClass('is-invalid');
        lastNameField.addClass('is-valid');
    }
  }

  function validateEmail(){
      let emailField=$('#input_email');
      let emailError=$('#input_email').parent().siblings().find('span.error')[0];
      if(!emailField[0].validity.valid){
          if(emailField[0].validity.valueMissing) {
              emailError.textContent = 'You need to enter an email address.';
          } else if(emailField[0].validity.tooShort) {
              emailError.textContent = `Email must be at least ${ emailField[0].minLength } characters.`;
          } else if(emailField[0].validity.tooLong) {
              emailError.textContent = `Email must be no more than ${ emailField[0].maxLength } characters.`;
          } else if(emailField[0].validity.typeMismatch){
              emailError.textContent = 'You need to enter a valid email address.';
          }
          emailField.removeClass('is-valid');
          emailField.addClass('is-invalid');
      } else {
          emailError.textContent = '';
          emailField.removeClass('is-invalid');
          emailField.addClass('is-valid');
      }
  }

  function validateAddress() {
      let addressField  = $('#input_address');
      let addressError = $('#input_address').parent().siblings().find('span.error')[0];
      if (!addressField[0].validity.valid) {
      if(addressField[0].validity.valueMissing) {
          addressError.textContent = 'You need to enter an address.';
        }
      else if (addressField[0].validity.tooShort) {
        addressError.textContent = `Address should be at least ${ addressField[0].minLength } characters.`;
      }
      else if (addressField[0].validity.tooLong) {
        addressError.textContent = `Address should be at most ${ addressField[0].maxLength } characters.`;
      }
      addressField.removeClass('is-valid');
      addressField.addClass('is-invalid');
    }
    else {
      addressError.textContent = "";
      addressField.removeClass('is-invalid');
      addressField.addClass('is-valid');
  }
}

  function validatePassword(){
    let passwordField=$('#input_password');
    let passwordError=$('#input_password').parent().siblings().find('span.error')[0];
    if(!passwordField[0].validity.valid){
        if(passwordField[0].validity.valueMissing) {
            passwordError.textContent = 'You need to enter a password.';
        } else if(passwordField[0].validity.tooShort) {
            passwordError.textContent = `Password must be at least ${ passwordField[0].minLength } characters.`;
        } else if(passwordField[0].validity.tooLong) {
            passwordError.textContent = `Password must be no more than ${ passwordField[0].maxLength } characters.`;
        }
        passwordField.removeClass('is-valid');
        passwordField.addClass('is-invalid');
    } else {
        passwordError.textContent = '';
        passwordField.removeClass('is-invalid');
        passwordField.addClass('is-valid');
    }
  }

});

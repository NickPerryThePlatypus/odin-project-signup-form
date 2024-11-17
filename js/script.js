const inputs = document.querySelectorAll('input');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm');
const phoneNumber = document.querySelector('#phone-number')


function formValidation() {
  // inputs validation
  inputs.forEach( input => {
    input.addEventListener('change', () => {
      if (!input.checkValidity()) {
        input.classList.remove('valid')
        input.classList.add('invalid')
      } else {
        input.classList.remove('invalid');
        input.classList.add('valid')
      }
    });

    // checking if passwords are matching
      const checkPasswords = () => {
        if (password.value !== passwordConfirm.value) {
          passwordConfirm.classList.remove('valid');
          passwordConfirm.classList.add('invalid');
        } else if(password.value === passwordConfirm.value) {
          passwordConfirm.classList.remove('invalid');
          passwordConfirm.classList.add('valid');
        }
      }
      passwordConfirm.addEventListener('input', checkPasswords);
      passwordConfirm.addEventListener('change', checkPasswords);
  });
}

formValidation();
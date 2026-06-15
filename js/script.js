const passIput = document.querySelector('.password');
const confPassInput = document.querySelector('.confPassword');

passIput.addEventListener('input', validatePass);
confPassInput.addEventListener('input', validatePass);

function validatePass() {
  if (passIput.value !== confPassInput.value) {
    passIput.setCustomValidity('Passwords do not match!');
    confPassInput.setCustomValidity('Passwords do not match!');
  } else {
    confPassInput.setCustomValidity('');
    passIput.setCustomValidity('');
  }
}
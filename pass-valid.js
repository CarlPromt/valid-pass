const validateForm = () => {
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
    const emailValid = emailRegex.test(emailInput.value);
    const passwordValid = passwordRegex.test(passwordInput.value);
  
    if (!emailValid) {
      alert('Введите корректный адрес электронной почты');
    }
  
    if (!passwordValid) {
      alert('Пароль должен содержать минимум 8 символов, включая буквы и цифры');
    }
  
    if (emailValid && passwordValid) {
      alert('Форма заполнена корректно!');
    }
  };
  
  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', validateForm);
  
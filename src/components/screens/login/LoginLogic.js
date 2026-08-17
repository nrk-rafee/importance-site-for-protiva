 function validateLogin(password) {
  const correctPassword = "love_you";

  if (password === correctPassword) {
    return true;
  }

  return false;
}

export default validateLogin;

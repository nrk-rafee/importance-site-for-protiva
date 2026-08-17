 function validateLogin(password) {
  const correctPassword = "6511";

  if (password === correctPassword) {
    return true;
  }

  return false;
}

export default validateLogin;

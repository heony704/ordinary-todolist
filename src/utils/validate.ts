export const isEmailValid = (email: string) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

export const isPasswordValid = (password: string) =>
  /(?=.*[A-Za-z])(?=.*\d).{8,}/.test(password);

export const isPasswordMatch = (password: string, confirmPassword: string) =>
  password === confirmPassword;

export const signUpValidation = (key: string, value: string) => {
  switch (key) {
    case "name":
      if (value.length === 0) {
        return "Name is required";
      }
      return "";
    case "email":
      if (value.length === 0) {
        return "Email is required";
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        return "Email is invalid";
      }
      return "";
    case "password":
      if (value.length === 0) {
        return "Password is required";
      }
      if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\W]{8,15}$/.test(
          value
        )
      ) {
        return "Password must be 8-15 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character";
      }
      return "";
    default:
      return "";
  }
};

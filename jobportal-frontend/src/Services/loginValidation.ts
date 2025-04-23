export const loginValidation = (key: string, value: string) => {
  switch (key) {
    case "email":
      if (value.length === 0) {
        return "Email is required";
      }
      return "";
    case "password":
      if (value.length === 0) {
        return "Password is required";
      }
      return "";
    default:
      return "";
  }
};

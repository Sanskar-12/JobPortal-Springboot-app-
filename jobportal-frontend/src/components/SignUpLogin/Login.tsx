import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/UserService";
import { loginValidation } from "../../Services/loginValidation";
import ResetPassword from "./ResetPassword";
import { useDisclosure } from "@mantine/hooks";
import {
  errorNotification,
  successNotification,
} from "../../Services/NotificationService";

const form = {
  email: "",
  password: "",
};

const Login = () => {
  const [data, setData] = useState(form);
  const [formError, setFormError] = useState(form);

  const [opened, { open, close }] = useDisclosure(false);

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name,
      value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
    setFormError({
      ...formError,
      [name]: loginValidation(name, value),
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await loginUser(data);
      successNotification("Login Successful", "Redirecting to home page...");
      setTimeout(() => {
        navigate("/");
      }, 4000);
      console.log(res);
    } catch (error) {
      errorNotification("Login Failed", error);
      console.log(error);
    }
  };

  const handleSignUpButton = () => {
    navigate("/sign-up");
    setData({
      email: "",
      password: "",
    });
    setFormError({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Login Account</div>
        <TextInput
          withAsterisk
          leftSection={
            <IconAt
              style={{
                width: rem(16),
                height: rem(16),
              }}
            />
          }
          label="Email"
          placeholder="Your email"
          value={data.email}
          onChange={handleChange}
          name="email"
          error={formError.email}
        />
        <PasswordInput
          withAsterisk
          leftSection={
            <IconLock
              style={{
                width: rem(18),
                height: rem(18),
              }}
              stroke={1.5}
            />
          }
          label="Password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          name="password"
          error={formError.password}
        />

        <Button
          autoContrast
          variant="filled"
          onClick={handleSubmit}
          disabled={
            !!formError.email ||
            (data.email === "" ? true : false) ||
            !!formError.password ||
            (data.password === "" ? true : false)
          }
        >
          Login
        </Button>
        <div className="mx-auto">
          Don't have an account?{" "}
          <span
            onClick={handleSignUpButton}
            className="text-bright-sun-400 hover:underline"
          >
            Sign up
          </span>
        </div>
        <div
          className="text-bright-sun-400 hover:underline cursor-pointer text-center"
          onClick={open}
        >
          Forget Password
        </div>
      </div>
      <ResetPassword opened={opened} close={close} />
    </>
  );
};

export default Login;

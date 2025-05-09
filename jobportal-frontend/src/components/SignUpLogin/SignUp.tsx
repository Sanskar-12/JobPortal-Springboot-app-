import {
  Button,
  Group,
  PasswordInput,
  Radio,
  rem,
  TextInput,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/UserService";
import { signUpValidation } from "../../Services/SignUpValidation";
import {
  errorNotification,
  successNotification,
} from "../../Services/NotificationService";

const form = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "APPLICANT",
};

const SignUp = () => {
  const [data, setData] = useState(form);
  const [formError, setFormError] = useState(form);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement> | string) => {
    if (typeof e === "string") {
      setData({
        ...data,
        accountType: e,
      });
      return;
    }
    const name = e.target.name,
      value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
    setFormError({
      ...formError,
      [name]: signUpValidation(name, value),
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await registerUser(data);
      setData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        accountType: "APPLICANT",
      });
      successNotification(
        "Registered Successfully",
        "Redirecting to login page..."
      );
      setTimeout(() => {
        navigate("/login");
      }, 4000);
    } catch (error) {
      errorNotification("Registration Failed", error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginButton = () => {
    navigate("/login");
    setData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      accountType: "APPLICANT",
    });
    setFormError({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      accountType: "APPLICANT",
    });
  };

  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput
        value={data.name}
        withAsterisk
        label="Full Name"
        placeholder="Your name"
        onChange={handleChange}
        name="name"
        error={formError.name}
      />
      <TextInput
        value={data.email}
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
        onChange={handleChange}
        name="email"
        error={formError.email}
      />
      <PasswordInput
        value={data.password}
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
        onChange={handleChange}
        name="password"
        error={formError.password}
      />
      <PasswordInput
        value={data.confirmPassword}
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
        label="Confirm Password"
        placeholder="Confirm Password"
        onChange={handleChange}
        name="confirmPassword"
        error={
          data.password !== data.confirmPassword ? "Passwords do not match" : ""
        }
      />
      <Radio.Group
        label="You are?"
        withAsterisk
        value={data.accountType}
        onChange={handleChange}
        name="accountType"
      >
        <Group mt="xs">
          <Radio
            className="py-4 px-6 border has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg hover:bg-mine-shaft-900"
            value="APPLICANT"
            label="Applicant"
            autoContrast
          />
          <Radio
            className="py-4 px-6 border has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg hover:bg-mine-shaft-900"
            value="EMPLOYER"
            label="Employer"
            autoContrast
          />
        </Group>
      </Radio.Group>
      <Button
        autoContrast
        variant="filled"
        onClick={handleSubmit}
        disabled={
          !!formError.name ||
          (data.name === "" ? true : false) ||
          !!formError.email ||
          (data.email === "" ? true : false) ||
          !!formError.password ||
          (data.password === "" ? true : false) ||
          data.password !== data.confirmPassword
        }
        loading={loading}
      >
        Sign up
      </Button>
      <div className="mx-auto">
        Have an account?{" "}
        <span
          onClick={handleLoginButton}
          className="text-bright-sun-400 hover:underline cursor-pointer"
        >
          Login
        </span>
      </div>
    </div>
  );
};

export default SignUp;

import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../Services/UserService";

const form = {
  email: "",
  password: "",
};

const Login = () => {
  const [data, setData] = useState(form);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await loginUser(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
      />

      <Button autoContrast variant="filled" onClick={handleSubmit}>
        Login
      </Button>
      <div className="mx-auto">
        Don't have an account?{" "}
        <Link to={"/sign-up"} className="text-bright-sun-400 hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;

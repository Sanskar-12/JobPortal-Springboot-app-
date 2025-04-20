import {
  Anchor,
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Radio,
  rem,
  TextInput,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

const form = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "",
};

const SignUp = () => {
  const [value, setValue] = useState("react");
  const [data, setData] = useState(form);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (typeof e === "string") {
      setData({
        ...data,
        accountType: e,
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
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
      <Checkbox
        autoContrast
        label={
          <>
            I accept <Anchor>terms & conditions</Anchor>
          </>
        }
      />
      <Button autoContrast variant="filled">
        Sign up
      </Button>
      <div className="mx-auto">
        Have an account?{" "}
        <Link to={"/login"} className="text-bright-sun-400 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

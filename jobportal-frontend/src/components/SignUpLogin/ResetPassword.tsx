import {
  Button,
  Modal,
  PasswordInput,
  PinInput,
  TextInput,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { ChangeEvent, useState } from "react";
import { changePassword, sendOtp, verifyOtp } from "../../Services/UserService";
import { signUpValidation } from "../../Services/SignUpValidation";
import {
  errorNotification,
  successNotification,
} from "../../Services/NotificationService";

interface ResetPasswordProps {
  opened: boolean;
  close: () => void;
}

const ResetPassword = ({ opened, close }: ResetPasswordProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [sentOtp, setSentOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleSendOtp = async () => {
    setLoading(true);
    try {
      await sendOtp(email);
      successNotification(
        "OTP sent to Email Successfully",
        "Enter OTP to reset Password."
      );
      setSentOtp(true);
    } catch (error) {
      console.log(error);
      errorNotification("OTP sending failed.", error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (otp: string) => {
    try {
      await verifyOtp(email, otp);
      successNotification(
        "OTP Verified Successfully",
        "Enter new password to reset."
      );
      setVerified(true);
    } catch (error) {
      console.log(error);
      errorNotification("OTP verification failed.", error);
      setVerified(false);
    }
  };

  const resendOtp = async () => {
    handleSendOtp();
  };

  const changeEmail = () => {
    setSentOtp(false);
  };

  const handleClose = () => {
    close();
    setEmail("");
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError(signUpValidation("password", e.target.value));
  };

  const handleResetPassword = async () => {
    try {
      await changePassword({ email, password });
      successNotification(
        "Password Changed Successfully",
        "Login with new Password."
      );
      close();
    } catch (error) {
      console.log(error);
      errorNotification("Password Change Failed.", error);
    }
  };

  return (
    <Modal opened={opened} onClose={handleClose} title="Reset Password">
      <div className="flex flex-col gap-6">
        <TextInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          size="md"
          label="Email"
          withAsterisk
          placeholder="Your email"
          leftSection={<IconAt size={16} />}
          rightSection={
            <Button
              size="xs"
              className="mr-1"
              onClick={handleSendOtp}
              autoContrast
              variant="filled"
              disabled={email === "" || sentOtp}
              loading={loading}
            >
              Send Otp
            </Button>
          }
          rightSectionWidth={"xl"}
        />
        {sentOtp && !verified && (
          <PinInput
            type={"number"}
            length={6}
            className="mx-auto"
            size="md"
            gap={"lg"}
            onComplete={handleVerifyOtp}
          />
        )}
        {sentOtp && !verified && (
          <div className="flex gap-2">
            <Button
              loading={loading}
              onClick={resendOtp}
              autoContrast
              variant="light"
              fullWidth
            >
              Resend
            </Button>
            <Button
              onClick={changeEmail}
              autoContrast
              variant="filled"
              fullWidth
            >
              Change Email
            </Button>
          </div>
        )}
        {verified && (
          <PasswordInput
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
            name="password"
            leftSection={<IconLock size={16} />}
            label="password"
            withAsterisk
            placeholder="Password"
          />
        )}
        {verified && (
          <Button onClick={handleResetPassword} autoContrast variant="filled">
            Change Password
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default ResetPassword;

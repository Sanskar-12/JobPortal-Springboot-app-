import { Button, Modal, PinInput, TextInput } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { useState } from "react";
import { sendOtp, verifyOtp } from "../../Services/UserService";

interface ResetPasswordProps {
  opened: boolean;
  close: () => void;
}

const ResetPassword = ({ opened, close }: ResetPasswordProps) => {
  const [email, setEmail] = useState("");
  const [sentOtp, setSentOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleSendOtp = async () => {
    setLoading(true);
    try {
      await sendOtp(email);
      setSentOtp(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (otp: string) => {
    try {
      await verifyOtp(email, otp);
      setVerified(true);
    } catch (error) {
      console.log(error);
      setVerified(false);
    }
  };

  const resendOtp = () => {};

  const changeEmail = () => {
    setSentOtp(false);
  };

  const handleClose = () => {
    close();
    setEmail("");
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
        {sentOtp && (
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
              loading={loading}
              onClick={changeEmail}
              autoContrast
              variant="filled"
              fullWidth
            >
              Change Email
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ResetPassword;

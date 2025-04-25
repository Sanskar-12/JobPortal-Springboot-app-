import { Button, Modal, PinInput, TextInput } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { useState } from "react";
import { sendOtp } from "../../Services/UserService";

interface ResetPasswordProps {
  opened: boolean;
  close: () => void;
}

const ResetPassword = ({ opened, close }: ResetPasswordProps) => {
  const [email, setEmail] = useState("");
  const [sentOtp, setSentOtp] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async () => {
    setLoading(true);
    try {
      await sendOtp(email);
      setEmail("");
      setSentOtp(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (otp: string) => {
    console.log(otp);
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
      </div>
    </Modal>
  );
};

export default ResetPassword;

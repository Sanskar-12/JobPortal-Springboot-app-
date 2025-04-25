import { Button, Modal, TextInput } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { useState } from "react";

interface ResetPasswordProps {
  opened: boolean;
  close: () => void;
}

const ResetPassword = ({ opened, close }: ResetPasswordProps) => {
  const [email, setEmail] = useState("");

  const handleSendOtp = () => {};

  return (
    <Modal opened={opened} onClose={close} title="Reset Password">
      <div>
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
              disabled={email === ""}
            >
              Send Otp
            </Button>
          }
          rightSectionWidth={"xl"}
        />
      </div>
    </Modal>
  );
};

export default ResetPassword;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconCheck, IconX } from "@tabler/icons-react";
import { showNotification } from "@mantine/notifications";

const successNotification = (title: string, message: string) => {
  showNotification({
    title,
    message,
    withCloseButton: true,
    icon: (
      <IconCheck
        style={{
          width: "90%",
          height: "90%",
        }}
      />
    ),
    color: "teal",
    withBorder: true,
    className: "!border-green-500",
  });
};

const errorNotification = (title: string, error: any) => {
  showNotification({
    title,
    message:
      (error as any)?.response?.data?.errorMessage || "An error occurred",
    withCloseButton: true,
    icon: (
      <IconX
        style={{
          width: "90%",
          height: "90%",
        }}
      />
    ),
    color: "red",
    withBorder: true,
    className: "!border-red-500",
  });
};

export { successNotification, errorNotification };

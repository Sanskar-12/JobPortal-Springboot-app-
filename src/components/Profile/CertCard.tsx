import { ActionIcon, Button } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { useState } from "react";

interface CertificationsCardProps {
  cert: {
    name: string;
    issuer: string;
    issueDate: string;
    certificateId: string;
  };
  edit: boolean;
}

const CertificationsCard = ({ cert, edit }: CertificationsCardProps) => {
  const [editInput, setEditInput] = useState(false);

  const handleEditInput = () => {
    setEditInput(!editInput);
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        <div className="p-2 bg-mine-shaft-800 rounded-md">
          <img className="h-7" src={`/Icons/${cert.issuer}.png`} alt="Logo" />
        </div>
        <div>
          <div className="font-semibold">{cert.name}</div>
          <div className="text-sm text-mine-shaft-300">{cert.issuer}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-end">
          <div className="text-sm text-mine-shaft-300">{cert.issueDate}</div>
          <div className="text-sm text-mine-shaft-300">
            ID: {cert.certificateId}
          </div>
        </div>
        {edit && (
          <ActionIcon color="red.4" variant="subtle">
            <IconTrash className="h-4/5 w-4/5" stroke={1.5} />
          </ActionIcon>
        )}
      </div>
      {edit && (
        <div className="flex gap-5">
          <Button
            color="bright-sun.4"
            variant="outline"
            onClick={() => handleEditInput()}
          >
            Edit
          </Button>
          <Button color="red.4" variant="light">
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default CertificationsCard;

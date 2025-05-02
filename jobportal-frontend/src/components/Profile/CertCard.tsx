import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { convertIntoDate } from "../../utils";
import { profileUserServiceType } from "../../types";
import { IRootUserState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../redux/Slice/profileSlice";
import { successNotification } from "../../Services/NotificationService";

interface CertificationsCardProps {
  cert: {
    name: string;
    issuer: string;
    issueDate: Date;
    certificateId: string;
  };
  edit: boolean;
  index: number;
}

const CertificationsCard = ({ cert, edit, index }: CertificationsCardProps) => {
  const dispatch = useDispatch();
  const profile = useSelector(
    (state: IRootUserState) => state.profile
  ) as profileUserServiceType;

  const handleRemoveCertification = (index: number) => {
    const certification = [...profile.certifications];
    const updatedCert = certification.filter((_, i) => i !== index);
    const updatedProfile = { ...profile, certifications: updatedCert };
    dispatch(changeProfile(updatedProfile));
    successNotification("Success", "Profile Updated Successfully");
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
          <div className="text-sm text-mine-shaft-300">
            {convertIntoDate(cert.issueDate)}
          </div>
          <div className="text-sm text-mine-shaft-300">
            ID: {cert.certificateId}
          </div>
        </div>
        {edit && (
          <ActionIcon color="red.4" variant="subtle">
            <IconTrash
              className="h-4/5 w-4/5"
              stroke={1.5}
              onClick={() => handleRemoveCertification(index as number)}
            />
          </ActionIcon>
        )}
      </div>
    </div>
  );
};

export default CertificationsCard;

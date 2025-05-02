import { ActionIcon } from "@mantine/core";
import { IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import CertificationsCard from "./CertCard";
import CertInput from "./CertInput";
import { useState } from "react";
import { useSelector } from "react-redux";
import { profileUserServiceType } from "../../types";
import { IRootUserState } from "../../redux/store";

const Certifications = () => {
  const [edit, setEdit] = useState(false);
  const [addCert, setAddCert] = useState(false);

  const profile = useSelector(
    (state: IRootUserState) => state.profile
  ) as profileUserServiceType;

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <>
      <div className="text-2xl font-semibold mb-5 flex justify-between">
        Certifications{" "}
        <div className="flex gap-2">
          <ActionIcon
            variant="subtle"
            color="bright-sun.4"
            size={"lg"}
            onClick={() => setAddCert(true)}
          >
            <IconPlus className="h-4/5 w-4/5" />
          </ActionIcon>
          <ActionIcon
            variant="subtle"
            color={edit ? "red.8" : "bright-sun.4"}
            size={"lg"}
            onClick={() => handleEdit()}
          >
            {edit ? (
              <IconX className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {profile?.certifications?.map((cert, index) => (
          <CertificationsCard
            cert={cert}
            key={index}
            edit={edit}
            index={index}
          />
        ))}
        {addCert && <CertInput add={true} setEdit={setAddCert} />}
      </div>
    </>
  );
};

export default Certifications;

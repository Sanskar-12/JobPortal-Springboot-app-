import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Company from "../components/Company/Company";

const CompanyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <Button
        leftSection={<IconArrowLeft size={20} />}
        color="bright-sun.4"
        variant="light"
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <div className="flex gap-5">
        <Company />
      </div>
    </div>
  );
};

export default CompanyPage;

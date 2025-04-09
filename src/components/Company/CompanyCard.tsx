import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

interface CompanyCardProps {
  name: string;
  employees: number;
}

const CompanyCard = ({ name, employees }: CompanyCardProps) => {
  return (
    <div>
      <div className="flex justify-between bg-mine-shaft-900 items-center rounded-lg p-2">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img className="h-7" src={`/Icons/${name}.png`} alt="Logo" />
          </div>
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-xs text-mine-shaft-300">
              {employees} Employees
            </div>
          </div>
        </div>
        <ActionIcon color="bright-sun.4" variant="subtle">
          <IconExternalLink />
        </ActionIcon>
      </div>
    </div>
  );
};

export default CompanyCard;

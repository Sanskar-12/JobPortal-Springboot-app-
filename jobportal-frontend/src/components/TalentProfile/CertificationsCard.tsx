import { formatMonthYear } from "../../utils";

interface CertificationsCardProps {
  cert: {
    name: string;
    issuer: string;
    issueDate: Date;
    certificateId: string;
  };
}

const CertificationsCard = ({ cert }: CertificationsCardProps) => {
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
      <div className="flex flex-col items-end">
        <div className="text-sm text-mine-shaft-300">
          {formatMonthYear(cert.issueDate)}
        </div>
        <div className="text-sm text-mine-shaft-300">
          ID: {cert.certificateId}
        </div>
      </div>
    </div>
  );
};

export default CertificationsCard;

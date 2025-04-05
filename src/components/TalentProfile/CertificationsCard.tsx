const CertificationsCard = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        <div className="p-2 bg-mine-shaft-800 rounded-md">
          <img className="h-7" src={`/Icons/Google.png`} alt="Logo" />
        </div>
        <div>
          <div className="font-semibold">Cloud Certifications</div>
          <div className="text-sm text-mine-shaft-300">Google</div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-sm text-mine-shaft-300">Jun 2023</div>
        <div className="text-sm text-mine-shaft-300">ID: JUEHHHUH&^&**677</div>
      </div>
    </div>
  );
};

export default CertificationsCard;

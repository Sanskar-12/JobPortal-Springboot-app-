import { companyData } from "../../Data/Company";
import { companyDataType } from "../../types";

const AboutCompany = () => {
  const company: companyDataType = companyData;

  return (
    <div>
      {(Object.keys(company) as (keyof companyDataType)[]).map((key, index) => (
        <div key={index}>
          <div>{key}</div>
          <div>{company[key]}</div>
        </div>
      ))}
    </div>
  );
};

export default AboutCompany;

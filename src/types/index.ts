export type profileType = {
  name: string;
  role: string;
  company: string;
  location: string;
  about: string;
  skills: string[];
  experience: {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  certifications: {
    name: string;
    issuer: string;
    issueDate: string;
    certificateId: string;
  }[];
};

export type option = {
  label: string;
  options: string[];
  placeholder: string;
};

export type companyDataType = {
  Name: string;
  Overview: string;
  Industry: string;
  Website: string;
  Size: string;
  Headquarters: string;
  Specialties: string[];
};

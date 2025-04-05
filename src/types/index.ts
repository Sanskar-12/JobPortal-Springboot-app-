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

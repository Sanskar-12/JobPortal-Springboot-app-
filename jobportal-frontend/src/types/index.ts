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

export type loginUserType = {
  email: string;
  password: string;
};

export type registerUserType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  accountType: string;
};

export type IUser = {
  accountType: string;
  email: string;
  id: number;
  name: string;
  password: string;
  profileId: number;
};

export type profileUserServiceType = {
  id: number;
  name: string;
  email: string;
  jobTitle: string;
  company: string;
  location: string;
  about: string;
  skills: string[];
  picture: string;
  savedJobs: number[];
  experience: {
    title: string;
    company: string;
    location: string;
    startDate: Date;
    endDate: Date;
    description: string;
    working: boolean;
  }[];
  certifications: {
    name: string;
    issuer: string;
    issueDate: Date;
    certificateId: string;
  }[];
};

export type postJobType = {
  jobTitle: string;
  company: string;
  about: string;
  experience: string;
  jobType: string;
  location: string;
  packageOffered: string;
  description: string;
  skillsRequired: string[];
  postedBy: number;
  jobStatus: string;
};

export type JobDetails = {
  id: number;
  jobTitle: string;
  company: string;
  applicants: [
    { applicantId: string; timestamp: string; applicationStatus: string }
  ];
  experience: string;
  jobStatus: string;
  jobType: string;
  location: string;
  packageOffered: string;
  postTime: Date;
  description: string;
  about: string;
};

export type applyJobType = {
  name: string;
  email: string;
  phone: string;
  website: string;
  resume: string;
  coverLetter: string;
};

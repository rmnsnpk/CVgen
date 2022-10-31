import { IListingData } from './listing-data';

export interface IEmployee {
  skills: IEmployeeDataSkills[];
  languages: IEmployeeDataLanguage[];
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  diplomaProfession: string;
  department: string;
  role: IListingData;
  id: string;
}

export interface IEmployeeDataSkills {
  name: string;
  category: IListingData;
  experience: number;
  lastUsed: number;
  level: IListingData;
  id: string;
}

export interface IEmployeeDataLanguage {
  name: string;
  everydayReadingLevel: IListingData;
  everydayWritingLevel: IListingData;
  everydaySpeakingLevel: IListingData;
  professionalReadingLevel: IListingData;
  professionalWritingLevel: IListingData;
  professionalSpeakingLevel: IListingData;
}

export interface IEmployeeDataRoles {
  name: string;
  id: string;
}

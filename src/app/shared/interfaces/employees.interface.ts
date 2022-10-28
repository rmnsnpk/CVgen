export interface IEmployee {
  skills: IEmployeeDataSkills[];
  languages: IEmployeeDataLanguage[];
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  diplomaProfession: string;
  department: string;
  role: IEmployeeData;
  id: string;
}

interface IEmployeeData {
  name: string;
  id: string;
}

export interface IEmployeeDataSkills {
  name: string;
  category: IEmployeeData;
  experience: number;
  lastUsed: number;
  level: IEmployeeData;
  id: string;
}

interface IEmployeeDataLanguage {
  name: string;
  everydayReadingLevel: IEmployeeData;
  everydayWritingLevel: IEmployeeData;
  everydaySpeakingLevel: IEmployeeData;
  professionalReadingLevel: IEmployeeData;
  professionalWritingLevel: IEmployeeData;
  professionalSpeakingLevel: IEmployeeData;
}

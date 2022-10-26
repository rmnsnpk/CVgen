export interface IProject {
  responsibilities: IProjectData[];
  projectRoles: IProjectData[];
  specializations: IProjectData[];
  name: string;
  secondName: string;
  startDate: string;
  endDate: string;
  teamSize: number;
  tasksPerformed: string;
  description: string;
  id: string;
}

export interface IProjectData {
  name: string;
  id: string;
}

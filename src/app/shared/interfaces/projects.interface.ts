import { IListingData } from './listing-data';

export interface IProject {
  responsibilities: IListingData[];
  projectRoles: IListingData[];
  specializations: IListingData[];
  name: string;
  secondName: string;
  startDate: string;
  endDate: string;
  teamSize: number;
  tasksPerformed: string;
  description: string;
  id: string;
}

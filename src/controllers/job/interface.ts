import { Company } from "../company/interface";

export interface Job {
  title: string;
  salary: string;
  isEuropOnly: boolean;
  isFullTime: string;
  company: Company;
}

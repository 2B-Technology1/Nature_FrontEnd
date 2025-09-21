import { ProjectTemplate } from "./project-template";


export interface CountryTemplate {
    id: string;
    countryName: string;
    projects: ProjectTemplate[];
    createdAt: string;
    updatedAt: string;
}

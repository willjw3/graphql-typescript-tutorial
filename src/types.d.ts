import ProjectAPI from "./datasources/project";
import UserAPI from "./datasources/user";

// Apollo types
export interface DataSourceConfig<TContext = any> {
    context: TContext;
    cache: KeyValueCache;
}

// Project types
export interface projectAssignment {
    projectId: number;
    userId: string;
    user: user;
    project: project; 
}

export interface user {
    id: string;
    name: string;
    email: string;
    projects: projectAssignment[]
}

export interface project {
    id: number;
    title: string;
    status: string;
    members: projectAssignment[];
}

export interface dataSources {
    userAPI: UserAPI;
    projectAPI: ProjectAPI;
}
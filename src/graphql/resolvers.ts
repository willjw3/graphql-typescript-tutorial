import { dataSources } from '../types';

export const resolvers = {
        Query: {
          users: async (_: any, __: any, { dataSources }:{ dataSources: dataSources}) => {
            const allUsers = await dataSources.userAPI.getUsers();
            return allUsers;
          },
          projects: async (_: any, __: any, { dataSources }:{ dataSources: dataSources}) => {
            const allProjects = await dataSources.projectAPI.getProjects();
            return allProjects;
          },
        },
      };

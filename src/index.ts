import { ApolloServer, gql } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';

import UserAPI from './datasources/user';
import ProjectAPI from './datasources/project';

const store = new PrismaClient();

const dataSources = () => ({
    userAPI: new UserAPI({ store }),
    projectAPI: new ProjectAPI({ store })
})

const context = async ({ req }:{req: any}) => {
    return null;
}



const server = new ApolloServer({
    typeDefs, 
    resolvers,
    dataSources,
    context
});

server.listen().then(({url}:{url: string}) => {
    console.log(`Server listening at ${url}`);
})


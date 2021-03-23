import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import {createUserTable, createProjectTable, createAssignmentTable, addUser, addProject, addAssignment} from './utils'

//createUserTable();
//createProjectTable();
//createAssignmentTable();
//addUser('Farah Bennis', 'fbennis@zcorp.com', 'bbc123');
//addProject('Onboard New Developers', 'active');
//addAssignment('fbennis@zcorp.com', 1, 'Farah Bennis');


const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}:{url: string}) => {
    console.log(`Server listening at ${url}`);
})


import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import {createUserTable, listTables, addUser, getUsers} from './utils'
import { client } from '../database/db';

// client.connect()
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })
//addUser(2, "Farah Bennis", "fbennis@zcorp.com", "bbc123");
//createUserTable();
//listTables();
//getUsers();

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}:{url: string}) => {
    console.log(`Server listening at ${url}`);
})


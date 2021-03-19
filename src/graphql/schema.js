const { gql } = require('apollo-server');

export const typeDefs = gql`
    type User {
      name: String
      email: String
      projects: [Project]
    }
  
    type Project {
        title: String 
        status: String 
        members: [User]
    }
  
    type Query {
      users: [User]
    }
  `;


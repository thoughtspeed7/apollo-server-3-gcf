// om namah shivaya

const { ApolloServer, gql } = require('apollo-server-cloud-functions');

// dummy data
const countries = [
  {
    code: 'IN',
    name: 'India',
  },
  {
    code: 'US',
    name: 'United States',
  },
];

// typeDefs
const typeDefs = gql`
  type Country {
    code: String!
    name: String!
  }

  type Query {
    countries: [Country!]!
  }
`;

// resolvers
const resolvers = {
  Query: {
    countries: () => countries,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = {
  main: server.createHandler(),
};

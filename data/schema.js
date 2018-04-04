const {makeExecutableSchema} = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
type Query {
  challenge(id: String): Challenge
}

type Challenge {
  id: String
  title: String
  users(offset:Int, limit:Int): UserList
}

type UserList {
  results: [User]
  offset: Int
  limit: Int
  count: Int
}

type User {
  id: String
  firstname: String
  lastname: String
}
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

module.exports = schema;

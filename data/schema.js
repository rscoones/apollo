const {makeExecutableSchema} = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `

`;

const schema = makeExecutableSchema({typeDefs, resolvers});

module.exports = schema;

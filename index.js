const express = require("express")
const compression = require("compression");
const {graphqlExpress, graphiqlExpress} = require("apollo-server-express")
const bodyParser = require("body-parser")
const schema = require("./data/schema")


const GRAPHQL_PORT = 3000

const graphQLServer = express();
graphQLServer.use(compression());

// GraphQl server
graphQLServer.use("/graphql", bodyParser.json(), graphqlExpress({
  schema,
  // cacheControl: true
}));

// The UI interface
graphQLServer.use("/graphiql", graphiqlExpress({endpointURL: "/graphql"}));

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(`GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`)
)

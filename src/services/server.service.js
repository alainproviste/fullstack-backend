const express = require('express');
const bodyParser = require('body-parser');
const config = require("../configs");
const cors = require('cors')
const port = config.server.port;
const apiRouter = require('../routes');
const { ApolloServer, gql } = require('apollo-server-express');
const schemas = require('../apollo/schemas/product.schema');
const resolvers = require('../apollo/resolvers/product.resolver');
const app = express();

const graphQlServer = new ApolloServer({
  typeDefs:schemas,
  resolvers
})
graphQlServer.applyMiddleware({ app, path: '/graphql' })
app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1/', apiRouter);

exports.start = () => {
  app.listen(port, (err) => {
    if (err) {
      console.log(`Errors: ${err}`);
      process.exit(-1);
    }
    console.log(`app is runnning on port ${port}`);
  });
};

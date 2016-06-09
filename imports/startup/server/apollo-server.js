import { apolloServer } from 'apollo-server';
import express from 'express';
import proxyMiddleware from 'http-proxy-middleware';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';

import schema from '/imports/api/schema';
import resolvers from '/imports/api/resolvers';

const GRAPHQL_PORT = 4000;

const graphQLServer = express();

graphQLServer.use('/graphql', apolloServer(async (req) => {
  let user = null;

  // Get the token from the header
  if (req.headers.authorization) {
    const token = req.headers.authorization;
    check(token, String);
    const hashedToken = Accounts._hashLoginToken(token);

    // Get the user from the database
    user = await Meteor.users.findOne(
      {"services.resume.loginTokens.hashedToken": hashedToken});
  }

  return {
    graphiql: true,
    pretty: true,
    mocks: {},
    schema,
    resolvers,

    // Attach the user to the context object
    context: {
      // The current user will now be available on context.user in all resolvers
      user,
    },
  };
}));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
));

WebApp.rawConnectHandlers.use(proxyMiddleware(`http://localhost:${GRAPHQL_PORT}/graphql`));

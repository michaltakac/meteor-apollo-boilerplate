import { Meteor } from 'meteor/meteor';
import { registerGqlTag } from 'apollo-client/gql';

Meteor.startup(() => {
  registerGqlTag();
});

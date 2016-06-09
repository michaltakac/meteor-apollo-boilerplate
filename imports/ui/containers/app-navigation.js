import React from 'react';
import { connect } from 'react-apollo';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { AppNavigation } from '../components/app-navigation';

// This container brings in Apollo GraphQL data
const AppWithData = connect({
  mapQueriesToProps({ ownProps }) {
    if (ownProps.userId) {
      return {
        currentUser: {
          query: gql`
            query getUserData ($id: String!) {
              user(id: $id) {
                profile {
                  name {
                    first
                    last
                  }
                }
                emails {
                  address
                  verified
                }
              }
            }
          `,
          variables: {
            id: ownProps.userId,
          },
        },
      };
    }
  },
})(AppNavigation);

// This container brings in Tracker-enabled Meteor data
const AppWithUserId = createContainer(() => {
  return {
    userId: Meteor.userId(),
  };
}, AppWithData);

export default AppWithUserId;

import { AddDocument } from '../components/add-document.js';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-apollo';
import { createContainer } from 'meteor/react-meteor-data';

function insertDocumentMutation(userId, title) {
  return {
    mutation: gql`
    mutation insertDocument($userId: String!, $title: String) {
      insertDocument(
        userId: $userId,
        title: $title
      ) {
        _id
      }
    }`,
    variables: {
      userId,
      title,
    },
  };
}

function mapQueriesToProps({ ownProps, state }) {
  return {
    data: {
      query: gql`
        query getDocuments($limit: Int!) {
          documents(limit: $limit) {
            _id
            title
          }
        }
      `,
      variables: {
        limit: 0,
      },
    },
  };
}

function mapMutationsToProps({ ownProps, state }) {
  if (ownProps.userId) {
    return {
      insertDocument: insertDocumentMutation,
    };
  }
}

const AddDocumentWithData = connect({
  mapQueriesToProps,
  mapMutationsToProps,
})(AddDocument);

// This container brings in Tracker-enabled Meteor data
const AddDocumentWithUserId = createContainer(() => {
  return {
    userId: Meteor.userId(),
  };
}, AddDocumentWithData);

export default AddDocumentWithUserId;


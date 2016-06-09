import { DocumentsList } from '../components/documents-list.js';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-apollo';
import { createContainer } from 'meteor/react-meteor-data';


function removeDocumentMutation(userId, documentId) {
  return {
    mutation: gql`
    mutation removeDocument($userId: String!, $documentId: String!) {
      removeDocument(userId: $userId, documentId: $documentId) {
        _id
      }
    }`,
    variables: {
      userId,
      documentId,
    },
  };
}

function updateDocumentMutation(userId, documentId, title) {
  return {
    mutation: gql`
    mutation updateDocument($userId: String!, $documentId: String!, $title: String) {
      updateDocument(
        userId: $userId,
        documentId: $documentId,
        title: $title
      ) {
        _id
      }
    }`,
    variables: {
      userId,
      documentId,
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
      updateDocument: updateDocumentMutation,
      removeDocument: removeDocumentMutation,
    };
  }
}

const DocumentsListWithData = connect({
  mapQueriesToProps,
  mapMutationsToProps,
})(DocumentsList);

// This container brings in Tracker-enabled Meteor data
const DocumentsListWithUserId = createContainer(() => {
  return {
    userId: Meteor.userId(),
  };
}, DocumentsListWithData);

export default DocumentsListWithUserId;


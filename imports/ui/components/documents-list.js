import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Document } from './document.js';

export const DocumentsList = ({ userId, data, mutations }) => {
  const { documents } = data;
  return (
    documents && documents.length > 0
      ?
      <ListGroup className="documents-list">
        {documents.map((doc) => (
          <Document
            key={ doc._id }
            document={ doc }
            data={ data }
            mutations={ mutations }
            userId={ userId }
            refetch={ data && data.refetch }
          />
        ))}
      </ListGroup>
      :
      <Alert bsStyle="warning">No documents yet.</Alert>
  );
};

DocumentsList.propTypes = {
  userId: React.PropTypes.string,
  data: React.PropTypes.object,
  mutations: React.PropTypes.object,
};

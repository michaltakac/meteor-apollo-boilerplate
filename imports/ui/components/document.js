import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import {
  dispatchUpdateDocumentMutation,
  dispatchRemoveDocumentMutation
} from '/imports/ui/actions/documentsMutations';

const handleUpdateDocument = (userId, documentId, mutation, refetch, event) => {
  const title = event.target.value.trim();

  if (title !== '' && event.keyCode === 13) {
    dispatchUpdateDocumentMutation(
      userId,
      documentId,
      title,
      mutation,
      refetch
    );
  }
};

const handleRemoveDocument = (userId, documentId, mutation, refetch, event) => {
  event.preventDefault();
  // this should be replaced with a styled solution so for now we will
  // disable the eslint `no-alert`
  // eslint-disable-next-line no-alert
  if (confirm('Are you sure? This is permanent.')) {
    dispatchRemoveDocumentMutation(
      userId,
      documentId,
      mutation,
      refetch
    )
  }
};

export const Document = ({ userId, document, data, mutations }) => (
  <ListGroupItem key={ document._id }>
    <Row>
      <Col xs={ 8 } sm={ 10 }>
        <FormControl
          type="text"
          standalone
          defaultValue={ document.title }
          onKeyUp={
            handleUpdateDocument.bind(this,
              userId,
              document && document._id,
              mutations && mutations.updateDocument,
              data && data.refetch
            )
          }
        />
      </Col>
      <Col xs={ 4 } sm={ 2 }>
        <Button
          bsStyle="danger"
          className="btn-block"
          onClick={
            handleRemoveDocument.bind(this,
              userId,
              document && document._id,
              mutations && mutations.removeDocument,
              data && data.refetch
            )
          }
        >
          Remove
        </Button>
      </Col>
    </Row>
  </ListGroupItem>
);

Document.propTypes = {
  document: React.PropTypes.object,
  data: React.PropTypes.object,
  userId: React.PropTypes.string,
  mutations: React.PropTypes.object,
};

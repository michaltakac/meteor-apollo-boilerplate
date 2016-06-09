import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { dispatchInsertDocumentMutation } from '/imports/ui/actions/documentsMutations';

const handleInsertDocument = (userId, mutation, refetch, event) => {
  const target = event.target;
  const title = target.value.trim();

  if (title !== '' && event.keyCode === 13) {
    dispatchInsertDocumentMutation(userId, title, mutation, refetch);
  }
};

export const AddDocument = ({userId, data, mutations}) => (
  <FormGroup>
    <FormControl
      type="text"
      onKeyUp={ handleInsertDocument.bind(this, userId, mutations && mutations.insertDocument, data && data.refetch) }
      placeholder="Type a document title and press enter..."
    />
  </FormGroup>
);

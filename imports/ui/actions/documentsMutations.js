import { Bert } from 'meteor/themeteorchef:bert';

export function dispatchInsertDocumentMutation(userId, title, mutation, refetch) {
  return mutation(userId, title).then((result) => {
    const { data, errors } = result;

    if (data) Bert.alert('Document inserted!', 'success');
    if (errors) Bert.alert('Something bad happened!', 'danger');
    if (refetch) return refetch();
  }).catch((error) => {
    // do something with error
  });
}

export function dispatchUpdateDocumentMutation(userId, documentId, title, mutation, refetch) {
  console.log(documentId);
  return mutation(userId, documentId, title).then((result) => {
    const { data, errors } = result;

    if (data) Bert.alert('Document updated!', 'success');
    if (errors) Bert.alert('Something bad happened!', 'danger');
    if (refetch) return refetch();
  }).catch((error) => {
    // do something with error
  });
}

export function dispatchRemoveDocumentMutation(userId, documentId, mutation, refetch) {
  return mutation(userId, documentId).then((result) => {
    const { data, errors } = result;

    if (data) Bert.alert('Document removed!', 'success');
    if (errors) Bert.alert('Something bad happened!', 'danger');
    if (refetch) return refetch();
  }).catch((error) => {
    // do something with error
  });
}

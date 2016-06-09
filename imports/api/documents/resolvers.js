import { Documents } from './documents';

const documentsResolvers = {
  Query: {
    async documents(root, { limit }) {
      return Documents.find({}, { limit: limit }).fetch();
    },
    async document(root, { title }) {
      return Documents.findOne({ title: title });
    },
  },
  Mutation: {
    async insertDocument(root, { userId, title }, context) {
      if (context.user._id === userId) {
        return Documents.insert({ title });
      }
    },
    async updateDocument(root, { userId, documentId, title }, context) {
      if (context.user._id === userId) {
        return Documents.update(documentId, { $set: { title } });
      }
    },
    async removeDocument(root, { userId, documentId }, context) {
      if (context.user._id === userId) {
        return Documents.remove(documentId);
      }
    }
  }
};

export default documentsResolvers;

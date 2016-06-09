import documentsSchema from './documents/schema.js';
import usersSchema from './users/schema.js';

const rootSchema = [`
  type Query {
    documents(limit: Int!): [Document],
    document(title: String!): Document!,
    user(id: String!): User
  }
  type Mutation {
    insertDocument(userId: String!, title: String): Document
    updateDocument(userId: String!, documentId: String!, title: String): Document
    removeDocument(userId: String!, documentId: String!): Document
  }
  schema {
    query: Query,
    mutation: Mutation
  }
`];

const schemas = [
  ...rootSchema,
  ...documentsSchema,
  ...usersSchema
];

export default schemas;

import { merge } from 'lodash';
import documentsResolvers from './documents/resolvers.js';
import usersResolvers from './users/resolvers.js';

const resolvers = merge(documentsResolvers, usersResolvers);

export default resolvers;

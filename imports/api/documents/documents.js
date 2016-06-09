import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { Factory } from 'meteor/dburles:factory';

export const Documents = new Mongo.Collection('Documents');

Factory.define('document', Documents, {
  title: () => faker.hacker.phrase(),
});

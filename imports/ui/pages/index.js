import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export const Index = () => (
  <Jumbotron className="text-center">
    <h2>Meteor + Apollo + React + Redux</h2>
    <p>A starting point for next level Meteor applications.</p>
    <p><a className="btn btn-success" href="http://docs.apollostack.com/" role="button">ApolloStack Documentation</a></p>
  </Jumbotron>
);

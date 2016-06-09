import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import { PublicNavigation } from './public-navigation';
import { AuthenticatedNavigation } from './authenticated-navigation';

export const AppNavigation = ({ userId, currentUser }) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Application Name</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        { userId ? <AuthenticatedNavigation currentUser={ currentUser } /> : <PublicNavigation /> }
      </Navbar.Collapse>
    </Navbar>
  );
};

AppNavigation.propTypes = {
  userId: React.PropTypes.string,
  currentUser: React.PropTypes.object,
};

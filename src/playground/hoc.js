// Higher Order Components (HOC) - a component that renders another component
// Reuse code
// Render Hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDom from  'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info, please don't share!</p>}
      <WrappedComponent { ...props } />
    </div>
  );
};

// alternative structure
// {props.isAuthenticated ? (
//   <WrappedComponent { ...props } />
// ) : (
//   <p>Please login to view the info</p>
// )}
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated
        ? <WrappedComponent { ...props } />
        : <p>You need to login to see this info</p>
      }
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// ReactDom.render(<AdminInfo isAdmin={true} info="'These are the details'" />, document.getElementById('app'));
ReactDom.render(<AuthInfo isAuthenticated={true} info="'These are the details'" />, document.getElementById('app'));
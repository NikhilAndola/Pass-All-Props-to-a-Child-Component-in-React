import * as React from 'react';
import DisplayAllProps from './DisplayAllProps';

const ChildComponent = (props) => (
  <React.Fragment>
    <h3>ChildComponent's props:</h3>
    <DisplayAllProps {...props}></DisplayAllProps>
  </React.Fragment>
);

export default ChildComponent;

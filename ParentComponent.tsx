import * as React from 'react';
import ChildComponent from './ChildComponent';
import DisplayAllProps from './DisplayAllProps';

const ParentComponent = (props) => (
  <section>
    <h3>Parent's component props</h3>
    <DisplayAllProps {...props} />
    <ChildComponent {...props} />
  </section>
);

export default ParentComponent;

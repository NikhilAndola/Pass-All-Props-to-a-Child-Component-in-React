import * as React from 'react';
import ParentComponent from './ParentComponent';

const App = () => {
  return (
    <div>
      <h2>
        Passing All components as Props together - using spread( ...) operator
        :)
      </h2>
      <ParentComponent name="Henry" job="👨‍🎤">
        <span role="img">🌟</span>
      </ParentComponent>
    </div>
  );
};

export default App;

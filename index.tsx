import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

render(<App />, document.getElementById('root'));

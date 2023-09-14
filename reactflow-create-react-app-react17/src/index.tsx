import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.css';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root') as HTMLElement
);

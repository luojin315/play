import ReactDOM from 'react-dom';
import './index.css';
import Page from './usehook'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Page />
  </BrowserRouter>,
  document.getElementById('root')
);
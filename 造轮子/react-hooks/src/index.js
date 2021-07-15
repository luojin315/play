import ReactDOM from 'react-dom';
import './index.css';
import Page from './redux2'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Page />
  </BrowserRouter>,
  document.getElementById('root')
);
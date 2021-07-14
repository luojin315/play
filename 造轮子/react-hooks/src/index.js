import ReactDOM from 'react-dom';
import './index.css';
import Page from './redux'
import Page2 from './redux/page2'

import { Provider } from 'react-redux'
import { countState, countState2 } from './redux/store'

ReactDOM.render(
  <Provider store={countState}>
    <Page />
    <Provider store={countState2}>
      <Page2 />
    </Provider>
  </Provider>,
  document.getElementById('root')
);
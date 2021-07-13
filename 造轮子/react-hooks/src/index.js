import ReactDOM from 'react-dom';
import './index.css';
import Page from './redux'
import { countState } from './redux/store'

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);

countState.subscribe(() => {
  ReactDOM.render(
    <Page />,
    document.getElementById('root')
  );
})

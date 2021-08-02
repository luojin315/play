import ReactDOM from "react-dom";
import "./index.css";
import Page from "./redux";
import { countState } from "./redux/store";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={countState}>
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

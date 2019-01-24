import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Studies from "./Containers/Studies/Studies";
import Study from "./Containers/Study/Study";

const AppRouter = () => (
  <Router>
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/study/m16-043/expected-data-and-idrp-checks">
              Study / M16-043 / Expected Data & IDRP Checks
            </Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Studies} />
      <Route path="/study/" component={Study} />
    </Fragment>
  </Router>
);

export default AppRouter;

import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import MainLayoutVisitor from "./layouts/MainLayoutVisitor";

function App() {
  return (
      <>

          <Switch>
              {/*<Route path="/" component={MainLayout} />*/}
              <Route path="/home" component={MainLayout} />
              <Route path="/visitor-home" component={MainLayoutVisitor} />
              <Route path="/login" exact component={Login} />
          </Switch>
      </>
  );
}

export default App;

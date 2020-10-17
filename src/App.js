import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Welcome from "./components/welcome/Welcome";
class App extends React.Component {
  returnRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/welcome" component={Welcome} />
      </Switch>
    );
  }
  render() {
    return <BrowserRouter>{this.returnRouter()}</BrowserRouter>;
  }
}

export default App;

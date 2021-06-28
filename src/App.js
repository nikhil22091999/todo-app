import React, { Component } from "react";
import "./App.css";
import Dashboard from "./console/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateTodo from "./console/createTodo";
import EditTodo from "./console/EditTodo";
import PageNotFound from "./console/PageNotFound";
import Header from "./console/header";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/create" component={CreateTodo} />
            <Route path="/edit/:id" component={EditTodo} />
            <Route path="/*" component={PageNotFound} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;

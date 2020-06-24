import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={Add} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

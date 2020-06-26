import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={Signin} />
        <Route exact path="/" component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;

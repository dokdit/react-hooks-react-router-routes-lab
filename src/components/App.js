import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Actors" component={Actors} />
        <Route path="/Directors" component={Directors} />
        <Route path="/Movies" component={Movies} />
      </Switch>
    </div>
  );
}

export default App;

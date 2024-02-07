import React from "react";

import { Route,Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return <div>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' >
          <NavBar />
          <Home />

        </Route>
        <Route path='/directors' >
          <NavBar />
          <Directors />

        </Route>
        <Route path='/actors' >
          <NavBar />
          <Actors />

        </Route>
        <Route path='/movies' >
          <NavBar />
          <Movies />
          

        </Route>
      </Switch>
    </BrowserRouter>
    
  </div>
}

export default App;

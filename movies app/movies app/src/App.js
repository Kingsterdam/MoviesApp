import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";
import Registration from "./components/Registration";
import Add from "./components/Add"

function App() {
  return (
    <GlobalProvider>
      <Router>
      <Registration/>
        <Switch>
          <Route path="/searchmovies">
            <Add />
          </Route>
          <Route path="/movieslist">
            <Watchlist />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
    
  );
}

export default App; 

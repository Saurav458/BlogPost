import React from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Addpost from "./components/Addpost/Addpost";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Viewdetail from "./components/ViewDetail/Viewdetail";
function App() {
  return (
    <div className="App">
       {/* <Login/>  */}
      <Router>
       
         <Switch>
         <Route exact path="/">
         <Homepage />
          </Route>
          <Route exact path="/post">
            <Addpost />
          </Route>
          <Route exact path='/view/:id' component={Viewdetail}></Route>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;

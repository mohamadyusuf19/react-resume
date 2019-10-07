import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../container/home/Home";
import Sidebar from "../components/sidebar/Sidebar";
import "./routes.css";
import Personal from "../container/personalinfo/Personal";
import Education from "../container/education/Education";
import Experience from "../container/experience/Experience";
import Skill from "../container/skill/Skill";

const Routes = () => {
  return (
    <Router>
      <div className="routes-row">
        <Sidebar id="print-preview" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/personal-info" component={Personal} />
          <Route path="/education" component={Education} />
          <Route path="/experience" component={Experience} />
          <Route path="/skill" component={Skill} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;

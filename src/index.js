import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import RegisterUser from "./screens/RegisterUser";
import Home from "./screens/Home";
import Login from "./screens/Login";
import ErrorPage from "./screens/ErrorPage";
import Editor from "./screens/Editor";
import AddQuest from "./screens/AddQuest";
import ShowQuestion from "./screens/ShowQuestion";
import Challenge from "./screens/Challenge";
import ForgotPassword from "./screens/ForgotPassword";
import ViewResult from "./screens/ViewResult";
import Rankings from "./screens/Rankings";
import FAQ from "./screens/FAQ";
import AboutUs from "./screens/AboutUs";
import Contact from "./screens/Contact";
import PreparePlacement from "./screens/PreparePlacement";
import GetPrepare from "./screens/GetPrepare";
import Rules from "./screens/Rules";
import KnowSkills from "./screens/KnowSkills";
const routs = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={RegisterUser} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/editor/:id" component={Editor} />
      <Route exact path="/addorupdateques/:id" component={AddQuest} />
      <Route exact path="/showquestion" component={ShowQuestion} />
      <Route exact path="/challenge/:id" component={Challenge} />
      <Route exact path="/forgot_password" component={ForgotPassword} />
      <Route exact path="/view_results" component={ViewResult} />
      <Route exact path="/rankings/:id" component={Rankings} />
      <Route exact path="/faq" component={FAQ} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/rules" component={Rules} />
      <Route exact path="/prepareplacement" component={PreparePlacement} />
      <Route exact path="/getprepare" component={GetPrepare} />
      <Route exact path="/knowskills" component={KnowSkills} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(routs, document.getElementById("root"));

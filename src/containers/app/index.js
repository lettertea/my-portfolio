import React from "react";
import { Route, NavLink } from "react-router-dom";
import Home from "../home";
import Projects from "../projects";
import Blog from "../blog";
import Contacts from "../../components/contact";
import "./styles.css";

const App = () => (
  <div id="body">
    <nav>
      <div className="container">
        <NavLink exact activeClassName='active-link' to="/" className="navbar-link">
          Home
        </NavLink>
        <NavLink activeClassName='active-link' to="/projects" className="navbar-link">
          Projects
        </NavLink>
        <NavLink activeClassName='active-link' to="/blog" className="navbar-link">
          Blog
        </NavLink>
        <NavLink activeClassName='active-link' to="/contacts" className="navbar-link">
          Contacts
        </NavLink>
      </div>
    </nav>

    <main className="container">
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/contacts" component={Contacts} />
    </main>
  </div>
);

export default App;

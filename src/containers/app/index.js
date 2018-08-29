import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Projects from '../projects'
import Blog from '../blog'
import About from '../about'


const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
)

export default App

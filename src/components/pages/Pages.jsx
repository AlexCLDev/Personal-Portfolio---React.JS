import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Footer from "../common/Footer"
import { Header } from "../common/Header"
import { Home } from "../home/Home"
import { About } from "./About"
import { Blog } from "./Blog"
import { Contact } from "./Contact"
import { Error404 } from "./Error404"
import { Portfolio } from "./Portfolio"
import { Projects } from "./Projects"
import { Services } from "./Services"
import { Testimonials } from "./Testimonials"

export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/portfolio/:id' component={Projects}/>
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/testimonials' component={Testimonials} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='*' component={Error404}/>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

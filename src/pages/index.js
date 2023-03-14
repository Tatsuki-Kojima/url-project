import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Home from "./home"
import Contact from "./contact";
import Contact_Child from "./contact/child";
import { Router } from "@reach/router";

const IndexPage = () => (
  // <div style={{ color: `purple` }}>
  //   <Link to="/contact/">Contact</Link>
  //   {/* <Header headerText="Hello Gatsby!" /> */}
  //   <p>What a world.</p>
  //   <img src="https://source.unsplash.com/random/400x200" alt="" />
  // </div>

  <>
    <Router>
      <Home path="/home" />
      <Contact path="/contact">
        <Contact_Child path="/child" />
      </Contact>
    </Router>
  </>
)

export default IndexPage;
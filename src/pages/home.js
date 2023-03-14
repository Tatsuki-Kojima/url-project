import React, { useEffect } from "react"
import { Link } from "gatsby"
import { navigate } from "@reach/router";

const Home = () => {
  // useEffect(() => {
  //   navigate("/contact/")
  // }, []);

  return (
  <div style={{ color: `teal` }}>
    <Link to="/contact/child">Contact</Link>
    {/* <Header headerText="Hello Gatsby!" /> */}
    <p>What a world.</p>
    {/* <img src="https://source.unsplash.com/random/400x200" alt="" /> */}
  </div>)
}

export default Home

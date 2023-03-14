import React from "react"
import { Link } from "gatsby"

const Contact_Child = () => {
  return (
    <div style={{ color: `teal` }}>
    <Link to="/home">Home</Link>
    {/* <Header headerText="Contact" /> */}
    <p>Child a message!</p>
  </div>)
}

export default Contact_Child
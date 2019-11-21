import React from "react"

const Home1stCard =({icon, title, lead, id, scrollY})=> {
return (
    <div className="col-sm-4">
    <div
      className={`box-style-1 white-bg object-non-visible animated object-visible ${
        scrollY > 300 ? `fade-in-bottom-${id}` : ""
      }`}
    >
      <i className={icon}></i>
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{lead}</p>
      <a href="/services" className="btn-default btn">
        Read More
      </a>
    </div>
  </div>
)}
export default Home1stCard

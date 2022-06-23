import React from 'react'
import CV from "../../assets/techresumePDF.pdf"

 const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} downlaod className="btn" target="_blank"> Download CV</a>
        <a href="#contact" className="btn btn-primary">Lets Talk</a>
    </div>
  )
}

export default CTA

import React from 'react'
import { useParams } from 'react-router-dom'

export const Description = ({movie}) => {
    const params=useParams()
    console.log(params);
    const thedesc=movie.find(el=>el.id==params.id)
console.log(thedesc);
  return (
  <div>
    <div className="section-data">
    <h2 className="section-title" style={{color:"white"}}>desciption <br/> Movie</h2>
    <p className="section-description" style={{color:"white"}}>{thedesc.phrase}</p>
  </div>
  </div>
  )
}

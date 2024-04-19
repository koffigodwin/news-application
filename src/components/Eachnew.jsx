import React from 'react'
import '../index.css'
import { Image } from '../assets/Image'

const Eachnew = ({title,description,url,src}) => {
  return (
    <div className="card each-card" style={{width:"18rem"}}>
  <img src={src?src : Image}  className="card-img-top images" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News values seem to be common across cultures. People seem to be interested in news to the extent which it has a big impact, describes conflicts, happens nearby, involves well-known people, and deviates from the norms of everyday happenings.".slice(0,90)}</p>
    <a href={url} className="btn btn-primary">View More</a>
  </div>
</div>
  )
}
// style={{height:"200px", width:"325px"}}

export default Eachnew
import React, { useState,useEffect } from 'react'
import Eachnew from './Eachnew'

const Newspage = ({category}) => {
    const [dataapi,setDataapi] = useState([])
    useEffect(()=>{
        
        const Url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_APP_KEY}`
        
        fetch(Url).then(response => response.json()).then(data => setDataapi(data.articles))
     },[category])
   
  return (
    <div className="all">
        <h2>Latest <strong className='rednews'>News</strong></h2>
        <div className='Card-container'>
        {
            dataapi?.map((news,index) =>{
             const {author,content,description,title,url,urlToImage} = news
             return <Eachnew  key={index} author={author} content={content} description={description} title={title} url={url} src={urlToImage}/>
            })
        }
    </div>
    </div>
  )
}

export default Newspage
import React, { useState,useEffect } from 'react'
import Eachnew from './Eachnew'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { nanoid} from 'nanoid'


const id = nanoid()
const Newspage = ({category}) => {
    const [dataapi,setDataapi] = useState([])
    
        
        const Url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_APP_KEY}`

    const { isPending , error , data} = useQuery({
      queryKey : ["brocode",category],
      queryFn : async () =>{
        const result = await axios.get(Url)
        const response = result.data.articles
        return response
      }
    })
    if (isPending) {
      return(
        <div className='Card-container'>
          <h4>Loading.....</h4>
        </div>
      )
    }if(error){
     return(
      <div className='Card-container'>
        <h2>404</h2>
        <p>the page is not found</p>
      </div>
     )
    }  
    
    
    const fetch = data
  return (
    <div className="all">
        <h2>Latest <strong className='rednews'>News</strong></h2>
        <div className='Card-container'>
        {
            fetch?.map((news,index) =>{
             const {author,content,description,title,url,urlToImage} = news
             return <Eachnew  key={index} author={author} content={content} description={description} title={title} url={url} src={urlToImage}/>
            })
        }
    </div>
    </div>
  )
}

export default Newspage
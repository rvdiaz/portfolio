import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const BlogSingle = () => {
  const {id}=useParams();
  const [blog, setblog] = useState({
    title:'',
    description:'',
    content:''
  })

  useEffect(() => {
    
  }, [])
  

  return (
    <div>BlogSingle {id}</div>
  )
}

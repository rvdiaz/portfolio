import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const BlogContext= createContext();

export const BlogContextProvider=(props)=>{
    const [contentBlog, setContentBlog] = useState({
        blogs:[],
        blogPage:{}
    }
    )

    useEffect(() => {
      const fetchData=async()=>{
        const contentBlog=await axios(process.env.REACT_APP_API + '/api/blog-sections');
        const contentBlogPage= await axios(process.env.REACT_APP_API + '/api/blog-page');
        setContentBlog({
            blogs:contentBlog.data.data,
            blogPage:contentBlogPage.data.data.attributes
        })
      }
      
      fetchData();    

    }, [])
   
    
    return (
        <BlogContext.Provider value={contentBlog}>
            {props.children}
        </BlogContext.Provider>
    )
    
}

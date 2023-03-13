import { createContext, useState } from "react";

export const BlogContext= createContext();

export const BlogContextProvider=(props)=>{
    const [contentBlog, setContentBlog] = useState({
        blogs:[],
        blogPage:{}
    }
    )

    const handleChange=(value)=>{
        setContentBlog(value);
    }
   
    
    return (
        <BlogContext.Provider value={{contentBlog,handleChange}}>
            {props.children}
        </BlogContext.Provider>
    )
    
}

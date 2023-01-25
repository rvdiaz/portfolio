import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BiographyContext=createContext();

export const BiographyContentProvider=(props)=>{
    const [content, setcontent] = useState({
        biographyContent:{}
    })

    useEffect(() => {
      const fetchData=async()=>{
        const biographyContent=await axios(process.env.REACT_APP_API + '/api/biography?[populate][content][populate]populate=*');
        
        setcontent({
            biographyContent:biographyContent.data.data.attributes 
        })
      }    
      fetchData();
    }, [])
    

    return (
        <BiographyContext.Provider value={content}>{props.children}</BiographyContext.Provider>
    )
}


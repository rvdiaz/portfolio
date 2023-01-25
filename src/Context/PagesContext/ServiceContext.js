import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ServiceContext= createContext();

export const ServiceContextProvider=(props)=>{
    const [content, setcontent] = useState({
        serviceContent:{}
    })

    useEffect(() => {
      const fetchData=async()=>{
        const serviceContent=await axios(process.env.REACT_APP_API + '/api/service?populate[services][populate]populate=*');
    
        setcontent({
            serviceContent:serviceContent.data.data.attributes
        })
      }

      fetchData();
    }, [])
   
    return (
        <ServiceContext.Provider value={content}>{props.children}</ServiceContext.Provider>
    )
}
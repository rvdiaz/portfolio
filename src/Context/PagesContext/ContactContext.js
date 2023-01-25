import axios from "axios";
import { useState,useEffect } from "react";
import { createContext } from "react";

export const ContactContext=createContext();

export const ContactContextProvider=(props)=>{
    const [content, setcontent] = useState({
        contactContent:{}
    })

    useEffect(() => {
      const fetchData=async()=>{
        const contactContent=await axios(process.env.REACT_APP_API + '/api/contact?populate=*');

        setcontent({
            contactContent:contactContent.data.data.attributes
        })
      }
      fetchData();
    }, [])
    
    return (
        <ContactContext.Provider value={content}>{props.children}</ContactContext.Provider>
    )

}
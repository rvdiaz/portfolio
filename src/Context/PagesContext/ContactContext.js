import axios from "axios";
import { useState,useEffect } from "react";
import { createContext } from "react";

export const ContactContext=createContext();

export const ContactContextProvider=(props)=>{
    const [content, setcontent] = useState({
        contactContent:{}
    })

    const handleChange=(value)=>{
      setcontent(value);
    }
    
    return (
        <ContactContext.Provider value={{content,handleChange}}>{props.children}</ContactContext.Provider>
    )

}
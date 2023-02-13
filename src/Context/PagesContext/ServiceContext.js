import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ServiceContext= createContext();

export const ServiceContextProvider=(props)=>{
    const [content, setcontent] = useState({
        serviceContent:{}
    })

    const handleChange=(value)=>{
      setcontent(value);
    }

    return (
        <ServiceContext.Provider value={{content,handleChange}}>{props.children}</ServiceContext.Provider>
    )
}
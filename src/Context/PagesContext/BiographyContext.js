import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BiographyContext=createContext();

export const BiographyContentProvider=(props)=>{
    const [contentBio, setcontent] = useState({
        biographyContent:{}
    })

    const handleChange=(value)=>{
      setcontent(value);
    }
    

    return (
        <BiographyContext.Provider value={{contentBio,handleChange}}>{props.children}</BiographyContext.Provider>
    )
}


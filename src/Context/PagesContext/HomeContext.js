import { createContext, useState } from "react";

export const HomeContext=createContext();

export const HomeContextProvider=(props)=>{
    const [contentHome, setContent] = useState({
        homeContent:{
            image:'',
            content:{}
        }});

    const handleChange=(value)=>{
        setContent(value);
    }
    
    return (
       <HomeContext.Provider value={{contentHome,handleChange}}>
            {props.children}
       </HomeContext.Provider>
    )
}
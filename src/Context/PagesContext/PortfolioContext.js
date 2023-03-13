import { createContext, useState } from "react";

export const PortfolioContext=createContext();

export const PortfolioContextProvider=(props)=>{
    const [content, setcontent] = useState({
        portfolioContent:{}
    })

    const handleChange=(value)=>{
        setcontent(value);
      }

    return (
        <PortfolioContext.Provider value={{content,handleChange}}>{props.children}</PortfolioContext.Provider>
    )
    
}
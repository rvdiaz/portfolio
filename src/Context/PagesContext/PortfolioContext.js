import axios from "axios";
import { createContext, useState,useEffect } from "react";

export const PortfolioContext=createContext();

export const PortfolioContextProvider=(props)=>{
    const [content, setcontent] = useState({
        portfolioContent:{}
    })

    useEffect(() => {
        const fetchData=async()=>{
        const portfolioContent= await axios(process.env.REACT_APP_API + '/api/portfolio?[populate][websites][populate]populate=*');

        setcontent({
            portfolioContent:portfolioContent.data.data.attributes
          })
      }

        fetchData();
    }, [])

    return (
        <PortfolioContext.Provider value={content}>{props.children}</PortfolioContext.Provider>
    )
    
}
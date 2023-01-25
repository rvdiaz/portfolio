import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const HomeContext=createContext();

export const HomeContextProvider=(props)=>{
    const [content, setContent] = useState({
        homeContent:{
            image:'',
            content:{}
        }});

    useEffect(() => {
        const fetchData=async()=>{
            const homeContent=await axios(process.env.REACT_APP_API + '/api/home?[populate][personal][populate]populate=*');
            const homeContentImage=await axios(process.env.REACT_APP_API + '/api/home?populate=*');

            setContent({
                homeContent:{
                    content:homeContent.data.data.attributes,
                    image:homeContentImage.data.data.attributes.image
                }})
        }
        fetchData();
    }, [])
    
    return (
       <HomeContext.Provider value={content}>
            {props.children}
       </HomeContext.Provider>
    )
}
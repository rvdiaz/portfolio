import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BodyContext=createContext();

export const BodyContextProvider=(props)=>{
    const [bodyContent, setbodyContent] = useState({
        headerSection:{},
        socialNetworks:[]
    });

    useEffect(() => {
        const fetchData=async()=>{
            const headerSection = await axios(process.env.REACT_APP_API+'/api/homepage?populate[body][populate]populate=*');
            const socialNetworks = await axios(process.env.REACT_APP_API+'/api/homepage?populate[social_networks][populate]populate=*');

            setbodyContent({
                headerSection:headerSection.data.data.attributes.body[0],
                socialNetworks:socialNetworks.data.data.attributes.social_networks.link
            })
        }

        fetchData();

    }, [])
    
    return (
       <BodyContext.Provider value={bodyContent}>
            {props.children}
       </BodyContext.Provider>
    )
}
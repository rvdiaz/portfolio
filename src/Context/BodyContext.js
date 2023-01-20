import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BodyContext=createContext();

export const BodyContextProvider=(props)=>{
    const [bodyContent, setbodyContent] = useState({
        socialNetworks:[],
        serviceSection:{},
        bioSection:{}
    });

    useEffect(() => {
        const fetchData=async()=>{
            const socialNetworks = await axios(process.env.REACT_APP_API+'/api/homepage?populate[social_networks][populate][link][populate]populate=*');
            const serviceSection= await axios(process.env.REACT_APP_API+'/api/homepage?populate[body][populate][service][populate]populate=*');
            const bioSection = await axios(process.env.REACT_APP_API+'/api/homepage?populate[body][populate][content][populate]populate=*');
            setbodyContent({
                socialNetworks:socialNetworks.data.data.attributes.social_networks.link,
                serviceSection:serviceSection.data.data.attributes.body[0],
                bioSection:bioSection.data.data.attributes.body[1]                
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
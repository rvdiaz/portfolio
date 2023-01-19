import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BodyContext=createContext();

export const BodyContextProvider=(props)=>{
    const [bodyContent, setbodyContent] = useState({
        headerSection:{},
        socialNetworks:[],
        serviceSection:{}
    });

    useEffect(() => {
        const fetchData=async()=>{
            const headerSection = await axios(process.env.REACT_APP_API+'/api/homepage?populate[body][populate]populate=*');
            const socialNetworks = await axios(process.env.REACT_APP_API+'/api/homepage?populate[social_networks][populate][link][populate]populate=*');
            const serviceSection= await axios(process.env.REACT_APP_API+'/api/homepage?populate[body][populate][service][populate]populate=*');
            setbodyContent({
                headerSection:headerSection.data.data.attributes.body[0],
                serviceSection:serviceSection.data.data.attributes.body[1],
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
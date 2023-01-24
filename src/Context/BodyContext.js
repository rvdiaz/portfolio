import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BodyContext=createContext();

export const BodyContextProvider=(props)=>{
    const [bodyContent, setbodyContent] = useState({
        socialNetworks:[],
        homeSection:{
            image:{},
            personal:{}
        },
        bioSection:{},
        serviceSection:{}, 
        workSection:{},
        contactSection:{}
    });

    useEffect(() => {
        const fetchData=async()=>{

            const socialNetworks = await axios(process.env.REACT_APP_API+'/api/homepage?populate[social_networks][populate][link][populate]populate=*');

            const homeSectionPersonal = await axios(process.env.REACT_APP_API+'/api/homepage?populate[body][populate][personal][populate]populate=*');
            const homeSectionImage = await axios(process.env.REACT_APP_API+'/api/homepage?populate[body][populate]populate=*');

            const bioSection = await axios(process.env.REACT_APP_API+'/api/homepage?populate[body][populate][content][populate]populate=*');
            const serviceSection= await axios(process.env.REACT_APP_API+'/api/homepage?populate[body][populate][service][populate]populate=*');
            const workSection=await axios(process.env.REACT_APP_API+'/api/homepage?populate[body][populate][websites][populate]populate=*');
            const contactSection = await axios(process.env.REACT_APP_API+'/api/homepage?populate[body][populate]populate=*');

            setbodyContent({
                socialNetworks:socialNetworks.data.data.attributes.social_networks.link,
                homeSection:{
                    image:homeSectionImage.data.data.attributes.body[0],
                    personal:homeSectionPersonal.data.data.attributes.body[0],
                },
                bioSection:bioSection.data.data.attributes.body[1],
                serviceSection:serviceSection.data.data.attributes.body[2],
                workSection: workSection.data.data.attributes.body[3],
                contactSection: contactSection.data.data.attributes.body[4],                
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
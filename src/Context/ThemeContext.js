import axios from "axios";
import { createContext, useEffect, useState } from "react";
const baseUrl=process.env.REACT_APP_API;

export const ThemeContext=createContext();

export const ThemeContextProvider=(props)=>{
    const [theme, setTheme] = useState({
        perfilPicture:'',
        backgroundPage:'',
        socialNetworks:[],
        info:{
            primaryColor:'',
            copyright:''
        }
    });

    useEffect(() => {
        const fetchData=async ()=>{
        const themeContext=await axios(process.env.REACT_APP_API+'/api/theme?populate[theme][populate]populate=*');
        const socialNetworks = await axios(process.env.REACT_APP_API+'/api/theme?populate[social_networks][populate][link][populate]populate=*');

        setTheme({
            ...theme,
            perfilPicture:process.env.REACT_APP_API + themeContext.data.data.attributes.theme.avatar.data.attributes.url,
            backgroundPage:process.env.REACT_APP_API + themeContext.data.data.attributes.theme.backgroundPage.data.attributes.url,
            socialNetworks:socialNetworks.data.data.attributes.social_networks.link,
            info:{
                primaryColor:themeContext.data.data.attributes.theme.primaryColor,
                copyright:themeContext.data.data.attributes.theme.copyright
            }
        })
       }

       fetchData();
    }, [])
    
    return(
        <ThemeContext.Provider value={theme}>
            {props.children}
        </ThemeContext.Provider>
    )
}
import axios from "axios";
import { createContext, useEffect, useState } from "react";
const baseUrl=process.env.REACT_APP_API;

export const ThemeContext=createContext();

export const ThemeContextProvider=(props)=>{
    const [theme, setTheme] = useState({
        primaryColor:'',
        perfilPicture:'',
        backgroundPage:''
    });

    useEffect(() => {
        const fetchData=async ()=>{
        const themeContext=await axios(process.env.REACT_APP_API+'/api/homepage?populate[theme][populate]populate=*');

        setTheme({
            primaryColor: themeContext.data.data.attributes.theme.PrimaryColor,
            perfilPicture:process.env.REACT_APP_API + themeContext.data.data.attributes.theme.avatar.data.attributes.url,
            backgroundPage:process.env.REACT_APP_API + themeContext.data.data.attributes.theme.backgroundPage.data.attributes.url
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
import axios from "axios";
import { createContext, useEffect, useState } from "react";
const baseUrl=process.env.REACT_APP_API;

export const ThemeContext=createContext();

export const ThemeContextProvider=(props)=>{
    const [theme, setTheme] = useState({
        primaryColor:''
    });

    useEffect(() => {
        axios.get(baseUrl+'/api/homepage?populate[theme]populate=*')
        .then(({data})=>{
            setTheme({
                ...theme,
                primaryColor:data.data.attributes.theme.PrimaryColor
            }
            )
        })
    }, [])
    
    return(
        <ThemeContext.Provider value={theme}>
            {props.children}
        </ThemeContext.Provider>
    )
}
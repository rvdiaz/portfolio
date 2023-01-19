import axios from "axios";
const baseUrl=process.env.REACT_APP_API;
const { createContext, useEffect, useState } = require("react");

const defaultValues={
    pages:[{
        id:'',
        label:''
    }],
    logo:'',
    test:"hello"
};

export const MenuContext=createContext();

export const MenuContextProvider=(props)=>{
    const [pagesValues, setpages] = useState(defaultValues);

    useEffect(() => {
        const fetchData=async()=>{
            const pages=await axios(baseUrl+'/api/homepage?populate[main_menu][populate][Buttons][populate]populate=*');
            setpages(
                {
                pages:pages.data.data.attributes.main_menu.Buttons
            });
        }
        fetchData();
    },[]);
    
    return (
        <MenuContext.Provider value={pagesValues}>{props.children}</MenuContext.Provider>
    )
}

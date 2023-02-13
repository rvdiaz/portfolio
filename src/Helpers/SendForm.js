import { ConstructionOutlined } from "@mui/icons-material";
import axios from "axios";

export const SendForm=(inputForm)=>{
    try {
    const name=inputForm.name.value;
    const phone=inputForm.phone.value;
    const email=inputForm.email.value;
    const website=inputForm.website.value;
    const message=inputForm.message.value;

    return axios.post(
        process.env.REACT_APP_API+'/api/leads',
        {
        "data":{
            "name": name,
            "email":email,
            "phone":phone,
            "website":website,
            "message":message
        }
    }
   )
    /* .then((response)=>{
        if(response.status == 200){
            console.log("sdd");
            return true;
        }
        return false;
    }) */
} catch (error) {
        console.log(error);
}
}
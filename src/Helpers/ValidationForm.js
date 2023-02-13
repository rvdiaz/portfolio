export const validateForm=(inputForm,setinputForm)=>{
    let name={};
    let phone=inputForm.phone;
    let email=inputForm.email;
    let website=inputForm.website;
    let valid=true;
    switch (true) {
        case inputForm.name.value == '':
            name={
                ...inputForm.name,
                error:true,
                errorMessage:'This field is required'
            }
            valid=false;
            break;
        default:
            name=inputForm.name;
            break;
    }

    switch (true) {
        case inputForm.phone.value == '':
            phone={
                ...inputForm.phone,
                error:true,
                errorMessage:'This field is required'
            }
            valid=false;
            break;
        case validatePhone(inputForm.phone.value):
            phone={
                ...inputForm.phone,
                error:true,
                errorMessage:'Phone format is incorrect'
            }
            valid=false;
            break;
        default:
            phone=inputForm.phone;
            break;
    }
    
    switch (true) {
        case inputForm.email.value == '':
            email={
                ...inputForm.email,
                error:true,
                errorMessage:'This field is required'
            }
            valid=false;
            break;
        case validateEmail(inputForm.email.value):
            email={
                ...inputForm.email,
                error:true,
                errorMessage:'Email format is incorrect'
            }
            valid=false;
            break;
        default:
            email=inputForm.email;
            break;
    }
    switch (true) {
        case validateWebsite(inputForm.website.value):
            website={
                ...inputForm.website,
                error:true,
                errorMessage:'Website format is incorrect'
            }
            valid=false;
            break;
        default:
            website=inputForm.website;
            break;
    }

    setinputForm((current)=>{
    return{
    ...current,
    name:name,
    phone:phone,
    email:email,
    website:website 
    }})  

    return valid;
}


const validatePhone=(phone)=>{
    const phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return !phone.match(phoneno);
}

const validateEmail=(email)=>{
    const emailCheck=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !email.match(emailCheck);
}

const validateWebsite=(website)=>{
    if(website == '')
    return false;
    const websiteCheck=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    return !website.match(websiteCheck);
}
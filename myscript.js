const submitButton = document.querySelector(".submit-button");

const fnameText = document.querySelector("#fname_text");
const fnameWarning = document.querySelector(".fname_warning")

const lnameText = document.querySelector("#lname_text");
const lnameWarning = document.querySelector(".lname_warning")

const emailText = document.querySelector("#email_text");
const fieldWarningEmail = document.querySelector(".field-warning-email2");

const alertMessage = document.querySelector(".alert_message");

let isValid=true
submitButton.addEventListener("click",function(){
    
    if (fnameText.value=="")
    {
        fnameWarning.classList.remove("hidden");
        isValid=false
    }
    else
    {
        fnameWarning.classList.add("hidden");
        isValid=true
    }
    
    if (lnameText.value=="")
    {
        lnameWarning.classList.remove("hidden"); 
        isValid=false
        
    }
    else
    {
        lnameWarning.classList.add("hidden");
        isValid=true
    }

    if (emailText.value=="")
    {
        fieldWarningEmail.classList.remove("hidden"); 
        isValid=false
    }
    else
    {
        fieldWarningEmail.classList.add("hidden");
        isValid=true
    }
        
           
})

if(isValid==true)
    {
        alertMessage.classList.remove("hidden");
        setTimeout(function () {
            alertMessage.classList.add("hidden");
        }, 1000);
    } 

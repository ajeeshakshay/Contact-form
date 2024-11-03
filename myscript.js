const submitButton = document.querySelector(".submit-button");

const fnameText = document.querySelector("#fname_text");
const fnameWarning = document.querySelector(".fname_warning")

const lnameText = document.querySelector("#lname_text");
const lnameWarning = document.querySelector(".lname_warning")

const emailText = document.querySelector("#email_text");
const fieldWarningEmail = document.querySelector(".field-warning-email2");
const fieldWarningEmail1 = document.querySelector(".field-warning-email");
const alertMessage = document.querySelector(".alert_message");

const fieldWarningRadio = document.querySelector(".field-warning-radio")

let isfname=true;
let islname=true;
let isemail=true;
let isradio=true;

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

submitButton.addEventListener("click",function(){
    
    if (fnameText.value=="")
    {
        fnameWarning.classList.remove("hidden");
        isfname=false
    }
    else
    {
        fnameWarning.classList.add("hidden");
        isfname=true
    }
    
    if (lnameText.value=="")
    {
        lnameWarning.classList.remove("hidden"); 
        islname=false  
    }
    else
    {
        lnameWarning.classList.add("hidden");
        islname=true
    }

    if (emailText.value=="")
    {
        fieldWarningEmail.classList.remove("hidden"); 
        isemail=false
    }
    else if(!validateEmail(emailText.value))
    {
        fieldWarningEmail.classList.add("hidden"); 
        fieldWarningEmail1.classList.remove("hidden"); 
        isemail=false
        
    }
    else
    {
        fieldWarningEmail1.classList.add("hidden"); 
        fieldWarningEmail.classList.add("hidden");
        isemail=true
        
    }

    if(document.querySelectorAll('input[type="radio"]:checked').length===0) {
        fieldWarningRadio.classList.remove("hidden")
        isradio=false
    }
    else{
        fieldWarningRadio.classList.add("hidden")
        isradio=true
    }
        
    if(isfname && islname && isemail && isradio)
        {
            alertMessage.classList.remove("hidden");
            setTimeout(function () {
                alertMessage.classList.add("hidden");
            }, 1000);
        }     
})



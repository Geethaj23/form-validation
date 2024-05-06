const nameInput=document.querySelector("#name");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const message=document.querySelector("#Message");
const success=document.querySelector("#success");
const errorNodes=document.querySelectorAll(".error");

function validateform()
{
 clearMessages();
 let errorFlag=false;
 
 if(nameInput.value.length<3)
    {
         errorNodes[0].innerText="Name cannot be blank";
         errorFlag=true;
         nameInput.classList.add('error-border');
    
        }
        if(!emailisValid(email.value))
          {
             errorNodes[1].innerText="Invalid email";
             errorFlag=true;
          }

          if(!passwordisValid(password.value))
            {
               errorNodes[2].innerText="Invalid password";
               errorFlag=true;
            }
            

        if(message.value.length<4)
            {
                 errorNodes[3].innerText="Enter the proper message";
                 errorFlag=true;
                 nameInput.classList.add('error-border');
            
                }
                if(!errorFlag)
                    {
                        success.innerHTML="Form Validation Successful";
                    }
                   
}

function clearMessages()
{
   for(let i=0;i<errorNodes.length;i++)
    {
        errorNodes[i].innerText="";
    }
   success.innerText="";
   
}
function emailisValid(email)
{
  let pattern=/\S+@\S+\.\S+/;
  return pattern.test(email);
}


function passwordisValid(password)
{
  let pattern=/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
  return pattern.test(password);
}


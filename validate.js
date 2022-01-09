var u=document.getElementById("name");
 var p=document.getElementById("phone");
 var email=document.getElementById("email");
 var pass=document.getElementById("pswd");
 
  function validate(){
      if(u.value==""||p.value==""||email.value==""||pass.value==""){
          alert("Fields cannot be empty");
          return false;
      }
     
      else{
        var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/
        if(regexp.test(email.value))
         {
        //  alert("Successfully Registered");
         return true;
         }
         else{
            alert("invalid email address");
            return false;  
        }
        }

    }
 

 function phonenumber()
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(phoneno.test(p.value))
     {
	   return true;      
	 }
   else
     {
	   alert("Not a valid Phone Number");
	   return false;
     }
}
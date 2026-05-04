    // Registeration Form
            function reg(){
let Regname = document.getElementById("regname").value
let Regmail =  document.getElementById("regmail").value
let Regpass =  document.getElementById("regpass").value
let Regconpass =  document.getElementById("regconfirm").value
// Conditions
if(Regname == "" && Regmail=="" && Regpass=="" && Regconpass==""){
    alert(`Pls fill out all fields...`)
}
else if(Regname == ""){
    document.getElementById("namevalid").innerText="Pls, enter your name here ☺️"
    if(Regname != ""){ document.getElementById("namevalid").innerText=""}
}
else if(Regmail == ""){
   
    document.getElementById("emailvalid").innerText="Pls, enter your valid email address here ☺️"
    if(Regmail != ""){ document.getElementById("emailvalid").innerText=""}
}
else if(Regpass == ""){
    document.getElementById("passvalid").innerText="Pls, enter your correct password here ☺️"
    if(Regpass != ""){ document.getElementById("passvalid").innerText=""}
}
else if(Regconpass == ""){
    document.getElementById("conpassvalid").innerText="Pls, Confirm your correct password here ☺️"
    if(Regconpass != ""){ document.getElementById("conpassvalid").innerText=""}
}
else if(Regpass != Regconpass){
    alert(`Your password does'nt match...!`)
}
else{
    localStorage.setItem(`username` , Regname);
    localStorage.setItem(`usermail` , Regmail);
    localStorage.setItem(`userpassword` , Regpass);
    localStorage.setItem(`userconfirmedpassword` , Regconpass);

      // Clear inputs
        document.getElementById("regname").value = "";
        document.getElementById("regmail").value = "";
        document.getElementById("regpass").value = "";
        document.getElementById("regconfirm").value = "";

        alert(`Registered as ` + Regname)

        window.location.href="login.html"
}

            }

 // Visiting work
function visitsite(){
    localStorage.setItem("username" , "Guest")
    localStorage.setItem("usermail" , "No Email")

    window.location.href="../pages/login.html"
}

// Login Work
function loginname(){
         let logname = document.getElementById("logname").value
        if(logname === ""){
            document.getElementById("namevalid").innerText="pls, fillout this field..."
        }
        else{
            document.getElementById("namevalid").innerText="";
        }
    }
    function loginmail(){
         let logmail = document.getElementById("logmail").value
        if(logmail === ""){
            document.getElementById("mailvalid").innerText="pls, fill out this field..."
        }
        else{
            document.getElementById("mailvalid").innerText="";
        }
    }
    function loginpass(){
         let logpass = document.getElementById("logpass").value
        if(logpass === ""){
            document.getElementById("passvalid").innerText="pls, fill out this field..."
        }
        else{
            document.getElementById("passvalid").innerText="";
        }
    }

function log(){
    let logname = document.getElementById("logname").value
    let logmail=document.getElementById("logmail").value
    let logpass=document.getElementById("logpass").value
    // ...
let regname = localStorage.getItem("username" )
let regmail = localStorage.getItem("usermail" )
let regpass = localStorage.getItem("userconfirmedpassword"  )

    if(logmail==="" && logpass==="" && logname===""){
        alert(`Pls fill out all fields...😊`)
    }
    else if(logname==""){
document.getElementById("namevalid").innerText="pls, enter your correct name here...😊"
    }
    else if(logmail==""){
        document.getElementById("mailvalid").innerText="Pls, enter valid email here...☺️"
    }
    else if(logpass==""){
        document.getElementById("passvalid").innerText="Pls, enter your correct password here...☺️"
    }


        else if(logname != regname){
            alert("Name doesnt match...😕")
            document.getElementById("logname").value="";
        }
        else if(logmail != regmail){
            alert("Email address doesnt match...😕")
            document.getElementById("logmail").value = "";
        }
        else if(logpass != regpass){
            alert("Password doesnt match...😕")
            document.getElementById("logpass").value = "";
        }



    else{
    localStorage.setItem(`login_mail` , logmail);
    localStorage.setItem(`userlogin_Password` , logpass);
    localStorage.setItem(`userlogin_Name` , logname);

      // Clear inputs
        document.getElementById("logmail").value = "";
        document.getElementById("logpass").value = "";
        document.getElementById("logname").value = "";
        
        

        alert(`logined as ` + logmail)

        window.location.href="main.html"
}

}



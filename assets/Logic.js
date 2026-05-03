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
function log(){
    let logmail=document.getElementById("logmail").value
    let logpass=document.getElementById("logpass").value

    if(logmail=="" && logpass==""){
        alert(`Pls fill out all fields...😊`)
    }
    else if(logmail==""){
        document.getElementById("mailvalid").innerText="Pls, enter valid email here ☺️"
    }
    else if(logpass==""){
        document.getElementById("passvalid").innerText="Pls, enter your correct password here ☺️"
    }
    else{
    localStorage.setItem(`loginmail` , logmail);
    localStorage.setItem(`userloginpassword` , logpass);

      // Clear inputs
        document.getElementById("logmail").value = "";
        document.getElementById("logpass").value = "";
        

        alert(`logined as ` + logmail)

        window.location.href="main.html"
}

}



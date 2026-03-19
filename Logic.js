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
}
else if(Regmail == ""){
    document.getElementById("emailvalid").innerText="Pls, enter your valid email address here ☺️"
}
else if(Regpass == ""){
    document.getElementById("passvalid").innerText="Pls, enter your correct password here ☺️"
}
else if(Regconpass == ""){
    document.getElementById("conpassvalid").innerText="Pls, Confirm your correct password here ☺️"
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

        window.location.href="index.html"
}

            }

 // Visiting work
function visitsite(){
    localStorage.setItem("username" , "Guest")
    localStorage.setItem("usermail" , "No Email")

    window.location.href="index.html"
}



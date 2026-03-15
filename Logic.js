    // Registeration Form
            function reg(){
let Regname = document.getElementById("regname").value
let Regmail =  document.getElementById("regmail").value
let Regpass =  document.getElementById("regpass").value
let Regconpass =  document.getElementById("regconfirm").value
// Condition
if(Regname == "" || Regmail=="" || Regpass=="" || Regconpass==""){
    alert(`Pls fill out all fields...`)
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


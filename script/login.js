var username= new Array();
var password = new Array();
var repassword = new Array();
var x=0;

function store()
{
    username[x]=document.getElementById("user").value;
    password[x]=document.getElementById("password").value;
    repassword[x]=document.getElementById("repassword").value;
    JSON.parse(localStorage.setItem("user",username)) || [];
    JSON.parse(localStorage.setItem("password",password)) || [];
    JSON.parse(localStorage.setItem("repassword",repassword)) || [];
    alert("Succesfully Signed Up");
}

   
function check()
{
    var storeuser=localStorage.getItem("user", JSON.stringify(username));
    var storepsw=localStorage.getItem("password",JSON.stringify(password));
    var loguser=document.getElementById("loguser").value;
    var logpsw=document.getElementById("logpsw").value;
    
    if((storeuser==loguser)&&(storepsw==logpsw))
    {
        alert("You have logged in Successfully")
        self.location="file:///C:/Users/adharsh.s/Documents/GitHub/Task-3/source/index.html";
    }
    else{
        alert("Error");
    }
}

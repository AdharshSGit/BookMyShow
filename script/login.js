var username= null;
var password = null;
var repassword = null;

function store()
{
    username=document.getElementById("user").value;
    password=document.getElementById("password").value;
    repassword=document.getElementById("repassword").value;
    localStorage.setItem("user",username);
    localStorage.setItem("password",password);
    localStorage.setItem("repassword",repassword);
    alert("Succesfully Signed Up");
}

   
function check()
{
    var storeuser=localStorage.getItem("user", username);
    var storepsw=localStorage.getItem("password",password);
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

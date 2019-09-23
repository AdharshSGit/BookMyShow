
var userarray=[];
var passarray=[];
var repassarray=[];
var storeuser="";
var storepsw="";
var userid1=0;
var dummy=0;
function store()
{
    if(window.localStorage["user"]!=null)
        userarray=JSON.parse(window.localStorage["user"]);
        userarray.push(document.getElementById("user").value);
        window.localStorage["user"]=JSON.stringify(userarray);

    if(window.localStorage["pass"]!=null)
        passarray=JSON.parse(window.localStorage["pass"]);
        passarray.push(document.getElementById("password").value);
        window.localStorage["pass"]=JSON.stringify(passarray);
    
    if(window.localStorage["repass"]!=null)
        repassarray=JSON.parse(window.localStorage["repass"]);
        repassarray.push(document.getElementById("repassword").value);
        window.localStorage["repass"]=JSON.stringify(repassarray);
    var len=userarray.length-1;
    console.log(len);
    console.log(userarray[len]);
    
    for(var j=0;j<len;j++)
    {
        
        dummy=0;
        if(userarray[j]==userarray[len])
        {
            
            console.log(userarray[j]);
            console.log(userarray[len]);
            dummy=1;
            break;
        }
    else{
        
        dummy=0;
        
    }}
    if(dummy==0){
        
        alert("Succesfully Signed Up");
        
    }
    else if(dummy==1){
        
        alert("Username Already Exist..!");
        
        
    }
    
}

   
function check()
{
    
    storeuser=JSON.parse(localStorage.getItem("user"));
    console.log(storeuser);
    storepsw=JSON.parse(localStorage.getItem("pass"));
    console.log(storepsw);
    var loguser=document.getElementById("loguser").value;
    var logpsw=document.getElementById("logpsw").value;
    var flag=0;
    if((loguser!="")&&(logpsw!=""))
    { 
        for(var i=0;i<storeuser.length;i++)
        {
    if((storeuser[i]==loguser)&&(storepsw[i]==logpsw))
    {
        flag =1;
        userid1 = i;
        console.log(userid1);
        localStorage.setItem("user_id",userid1);
       
    }
    else{
        flag=0;
      
    }
    }
    }
    if(flag=1){
        alert("You have logged in Successfully")

        document.getElementById("loguser").value="";
        document.getElementById("logpsw").value="";
        //self.location="file:///C:/Users/adharsh.s/Documents/GitHub/Task-3/source/index.html";
        window.location.assign("../source/index.html");
    }
    else{
        alert("Error");
    }
}

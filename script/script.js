var comp1=[];
var comp2=[];
var comp3=[];
var comp4=[];
var booking;
var film=new Array();
var final=new Array();
var disp= new Array();
var mytable=new Array();
var id=[];
var noofseat=[];
var showscreen="";
var table=new Array();
var count=0;
var prices=0;
var totalprice=[];
var showtime=[];
var seatnumber=[];
var numseat=0;
function update(){
    
    var l1 = document.getElementById("city");
    var strl1 = l1.options[l1.selectedIndex].value;

    var l2 = document.getElementById("event");
    var strl2 = l2.options[l2.selectedIndex].value;

    

    if((strl1=="Pollachi")||(strl1=="Trichy"))
    {
        console.log(strl1);
        document.getElementById('e2').disabled =true;
        document.getElementById('s4').disabled =true;
    }
    if(strl2=="Movie")
    {
        console.log(strl2);
        document.getElementById('s4').disabled=true;
    }
    if(strl2=="Sports")
    {
        document.getElementById('s1').disabled=true;
        document.getElementById('s2').disabled=true;
        document.getElementById('s3').disabled=true;
        
    }
   
}
function validate(){
    var l1 = document.getElementById("city");
    var strl1 = l1.options[l1.selectedIndex].value;

    
    var l2 = document.getElementById("event");
    var strl2 = l2.options[l2.selectedIndex].value;

    var l3 = document.getElementById("shows");
    var strl3 = l3.options[l3.selectedIndex].value;
    
    
  

    if(strl1==0){
        alert("Enter the City..");
        
    }
    else if(strl2==0){
        alert("Enter the Event..");
        
    }
    else if(strl3==0){
        alert("Enter the show..");
        
    }
    else{
      Submit();
    }

}

function Submit()
{
    //city
    if(window.localStorage["cities"]!=null)
    comp1=JSON.parse(window.localStorage["cities"]);
    comp1.push(document.getElementById("city").value);
    window.localStorage["cities"]=JSON.stringify(comp1);
    console.log(comp1);

    //event
    if(window.localStorage["events"]!=null)
    comp2=JSON.parse(window.localStorage["events"]);
    comp2.push(document.getElementById("event").value);
    window.localStorage["events"]=JSON.stringify(comp2);
    
    //shows
    if(window.localStorage["showss"]!=null)
    comp3=JSON.parse(window.localStorage["showss"]);
    comp3.push(document.getElementById("shows").value);
    window.localStorage["showss"]=JSON.stringify(comp3);
    
    //date
    if(window.localStorage["date"]!=null)
    comp4=JSON.parse(window.localStorage["date"]);
    comp4.push(document.getElementById("day").value);
    window.localStorage["date"]=JSON.stringify(comp4);
    
    
    booking=[{city:"Chennai",event:"Movie", shows:"SARKAR",screen:[{s1:"PVR-10AM"},{s1:"IMAX-1PM"},{s1:"INOX-4PM"}]},
    {city:"Chennai",event:"Movie", shows:"ENPT",screen:[{s1:"PVR-10AM"},{s1:"IMAX-1PM"},{s1:"INOX-4PM"}]},
    {city:"Chennai",event:"Movie", shows:"COMALI",screen:[{s1:"PVR-10AM"},{s1:"IMAX-1PM"},{s1:"INOX-4PM"}]},
    {city:"Coimbatore",event:"Movie", shows:"SARKAR",screen:[{s1:"PVR-10AM"},{s1:"IMAX-1PM"},{s1:"INOX-4PM"}]},
    {city:"Coimbatore",event:"Movie", shows:"ENPT",screen:[{s1:"PVR-10AM"},{s1:"IMAX-1PM"},{s1:"INOX-4PM"}]},
    {city:"Coimbatore",event:"Movie", shows:"COMALI",screen:[{s1:"PVR-10AM"},{s1:"IMAX-1PM"},{s1:"INOX-4PM"}]},
    {city:"Pollachi",event:"Movie", shows:"SARKAR",screen:[{s1:"PVR-10AM"},{s1:"IMAX-1PM"},{s1:"INOX-4PM"}]},
    {city:"Pollachi",event:"Movie", shows:"ENPT",screen:[{s1:"PVR-10AM"},{s1:"IMAX-1PM"},{s1:"INOX-4PM"}]},
    {city:"Pollachi",event:"Movie", shows:"COMALI",screen:[{s1:"PVR-10AM"},{s1:"IMAX-1PM"},{s1:"INOX-4PM"}]},
    {city:"Trichy",event:"Movie", shows:"SARKAR",screen:[{s1:"PVR-10AM"},{s1:"IMAX-1PM"},{s1:"INOX-4PM"}]},
    {city:"Trichy",event:"Movie", shows:"ENPT",screen:[{s1:"PVR-10AM"},{s1:"IMAX-1PM"},{s1:"INOX-4PM"}]},
    {city:"Trichy",event:"Movie", shows:"COMALI",screen:[{s1:"PVR-10AM"},{s1:"IMAX-1PM"},{s1:"INOX-4PM"}]},
    {city:"Chennai",event:"Sports", shows:"Cricket",screen:[{s1:"Chepauk(IPL)-3PM"},{s1:"Chepauk(IPL)-8PM"}]},
    {city:"Coimbatore",event:"Sports", shows:"Cricket",screen:[{s1:"NehruStadium(TNPL)-5PM"}]}];
    
    localStorage.setItem("booking", JSON.stringify(booking));
    booking = JSON.parse(localStorage.getItem("booking"));
    console.log(typeof booking);
    console.log(booking); //[1, 2, 3]
    
    compare();
}

function compare()
{
   var userid1=localStorage.getItem("user_id");
    for(var i=0;i<booking.length;i++)
    {
        
        if(comp1[userid1]==booking[i].city)
        {   
            if(comp2[userid1]==booking[i].event)
            {
                if(comp3[userid1]==booking[i].shows)
                {
                    for(var j=0;j<booking[i].screen.length;j++)
                    {
                        
                        film=booking[i].screen[j].s1 ;
                        
                        final.push(film);
                        window.localStorage["final"]=JSON.stringify(final);
                        console.log(final);
                       
                    }
                    
                    alert("Success");
                    
                    self.location="file:///C:/Users/adharsh.s/Documents/GitHub/Task-3/source/book.html";
                }   
            }
        }       
    }  
}
function display()
{
    var res="";
    disp=JSON.parse(localStorage.getItem("final"));
    
    for(var i=0;i<disp.length;i++){
        res += "<input type='radio' id='r' value='disp' name='radio[]' onclick='radio()'>" 
        + disp[i] + "</input>" + "<br>";
        console.log(disp[i]);        
    }
    document.getElementById("result1").innerHTML =res;
    
}
function radio()
{
    var screen=0; 
     screen = document.getElementsByName("radio[]");
    if (screen[0].checked == true) {
        alert("You have chosen the screen1");
        
        localStorage.setItem("disp",disp[0]);
        showscreen=localStorage.getItem("disp");
        get();
    }
    else if (screen[1].checked == true) {
        alert("You have chosen the screen2");
        console.log(disp[1]);
        localStorage.setItem("disp",disp[1]);
        showscreen = localStorage.getItem("disp");
        get();
    }
    else if (screen[2].checked == true) {
        alert("You have chosen the screen3");    
        console.log(disp[2]);
        localStorage.setItem("disp",disp[2]);
        showscreen = (localStorage.getItem("disp"));
        console.log(showscreen);
        get();
    }
    else{
        alert("Choose a Screen");
    }

function get(){
    if(window.localStorage["showtime"]!=null)
    
    showtime=JSON.parse(window.localStorage['showtime']);
    showtime.push(showscreen);
    window.localStorage["showtime"]=JSON.stringify(showtime);
    call();
}
function call(){
    document.getElementById('timer').style.display='block';
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
}
    
}
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
    document.getElementById('content2').style.display='block';
    document.getElementById('content1').style.display='none';
}



function takeData(){
    //id
    if(window.localStorage["userid"]!=null)
    id=JSON.parse(window.localStorage["userid"]);
    id.push(parseInt(document.getElementById("Username").value));
    window.localStorage["userid"]=JSON.stringify(id);

    //no.ofseat
    if(window.localStorage["noofseat"]!=null)
    noofseat=JSON.parse(window.localStorage["noofseat"]);
    noofseat.push(parseInt(document.getElementById("Numseats").value));
    window.localStorage["noofseat"]=JSON.stringify(noofseat);
    numseat=JSON.parse(localStorage.getItem("noofseat"));

    if(id="")
    {
        alert("Enter the User Id");
    }
    else if(noofseat="")
    {
        alert("Enter No.of Seats to be booked");
    }
    else {
        
        document.getElementById('ss').style.display='block';
        
    }
    
}
function updateTextArea()
{
    var seatselect=new Array();
    count=0;
    seatselect = document.getElementsByClassName("seats");
    var seatnum = "";
    for(var i=0;i<120;i++)
    {
        if(seatselect[i].checked)
        {
            
            seatnum += seatselect[i].value ;
            count++;
            
        }
        
    }
    console.log(count);
    console.log(seatnum);
    console.log(numseat[0]);
    //seatnumber
    if(window.localStorage["seatnum"]!=null)
    seatnumber=JSON.parse(window.localStorage["seatnum"]);
    seatnumber.push(seatnum);
    window.localStorage["seatnum"]=JSON.stringify(seatnumber);

    
    if(count==numseat[0])
    {
        price(count);   
    }
    else{
        alert("Select valid no.of Seats");
    }
    
}
function price(count){
    if(count!=0)
    {
        prices = count*200;
        console.log(prices);
        //price
        if(window.localStorage["totalprice"]!=null)
        totalprice=JSON.parse(window.localStorage["totalprice"]);
        totalprice.push(prices);
        window.localStorage["totalprice"]=JSON.stringify(totalprice);

    }
    document.getElementById('Username').value="";
    document.getElementById('Numseats').value="";
     //document.getElementById('ss').style.display='none';
     //document.getElementById('detail').style.display='none';
    //document.getElementById('table1').style.display='block';
    
    window.location.assign("../source/result.html");
   
}

function tabledisp()
{
       
    var k1=[]; var k2=[]; var k3=[]; var k4=[]; var k5=[]; var k6=[]; var k7=[];
    k1[userid1]=JSON.parse(localStorage.getItem("userid"));console.log(k1[0]);
    k2[userid1]=JSON.parse(localStorage.getItem("cities"));
    k3[userid1]=JSON.parse(localStorage.getItem("showss"));
    k4[userid1]=JSON.parse(localStorage.getItem("date"));
    k5[userid1]=JSON.parse(localStorage.getItem("showtime"));
    k6[userid1]=JSON.parse(localStorage.getItem("seatnum"));
    k7[userid1]=JSON.parse(localStorage.getItem("totalprice"));
    table+="<table border='3'><tr><th 'text-align: center;'>User Id</th><th>City</th><th>Show</th><th>Date</th><th>Screen-Timings</th><th>Seat No</th><th>Total Price</th>";
    table+="<tr><td>" + k1[userid1] + "</td>" + "<td>" + k2[userid1] + "</td>"+ "<td>" + k3[userid1] + "</td>"+ "<td>" + k4[userid1] + "</td>"+ "<td>" + k5[userid1] + "</td>"
    +  "<td>" + k6[userid1] + "<td>" +'Rs: ' + k7[userid1] + "</td></tr></table>";
    
    document.getElementById("table1").innerHTML=table;  
    
}
function deletetable()
{
    localStorage.removeItem("id");
    localStorage.removeItem("city");
    localStorage.removeItem("shows");
    localStorage.removeItem("event");
    localStorage.removeItem("day");
    localStorage.removeItem("disp");
    localStorage.removeItem("seatnum");
    localStorage.removeItem("noofseat");
    localStorage.removeItem("price");
    self.location="file:///C:/Users/adharsh.s/Documents/GitHub/Task-3/source/index.html";

}
function goback1(){
    document.getElementById('detail').style.display='none';
    document.getElementById('content1').style.display='block';
    document.getElementById('timer').style.display='none';
    
}
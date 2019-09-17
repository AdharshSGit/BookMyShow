var comp1="";
var comp2="";
var comp3="";
var comp4="";
var booking;
var film=new Array();
var final=new Array();
var disp= new Array();
var mytable=new Array();
var id=0;
var noofseat=0;
var showscreen="";
var table=new Array();
var count=0;
var prices=0;
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
    comp1 = document.getElementById("city").value;
    comp2 = document.getElementById("event").value;
    comp3 = document.getElementById("shows").value;
    comp4 = document.getElementById("day").value;
    console.log(comp4);
    
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
    localStorage.setItem("city",comp1);
    localStorage.setItem("event",comp2);
    localStorage.setItem("shows",comp3);
    localStorage.setItem("day",comp4);
    compare();
}

function compare()
{
    
    for(var i=0;i<booking.length;i++)
    {
        
        if(comp1==booking[i].city)
        {   
            if(comp2==booking[i].event)
            {
                if(comp3==booking[i].shows)
                {
                    for(var j=0;j<booking[i].screen.length;j++)
                    {
                        
                        film=booking[i].screen[j].s1 ;
                        
                        //film=booking[i].screen[j].s1 + "<br>" + booking[i].screen[j+1].s2 + "<br>" + booking[i].screen[j+2].s3;
                        final.push(film);
                        window.localStorage["final"]=JSON.stringify(final);
                        console.log(final);
                        //console.log(booking[0].screen[0].s1);
                        //JSON.parse(localStorage.setItem("final0",final[0]));
                        //JSON.parse(localStorage.setItem("final1",final[1]));
                        //JSON.parse(localStorage.setItem("final2",final[2]));
                        //localStorage.setItem("film",film);

                        
                    }
                    //console.log(final0);
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
        console.log(disp[0]);
        showscreen = localStorage.setItem("disp",disp[0]);
        call();
    }
    else if (screen[1].checked == true) {
        alert("You have chosen the screen2");
        console.log(disp[1]);
        showscreen = localStorage.setItem("disp",disp[1]);
        call();
    }
    else if (screen[2].checked == true) {
        alert("You have chosen the screen3");    
        console.log(disp[2]);
        showscreen = localStorage.setItem("disp",disp[2]);
        call();
    }
    else{
        alert("Choose a Screen");
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
    id = parseInt(document.getElementById("Username").value);
    noofseat = parseInt(document.getElementById("Numseats").value);
    localStorage.setItem("id",id);
    localStorage.setItem("noofseat",noofseat);
    if(isNaN(id))
    {
        alert("Enter the User Id");
    }
    else if(isNaN(noofseat))
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
            
            seatnum += seatselect[i].value +'<br>';
            count++;
            
        }
        
    }
    console.log(count);
    console.log(seatnum);
    localStorage.setItem("seatnum",seatnum);
    if(count==noofseat)
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
        localStorage.setItem("price",prices);
        
    }
     document.getElementById('ss').style.display='none';
     document.getElementById('detail').style.display='none';
    document.getElementById('table1').style.display='block';
    tabledisp();
}

function tabledisp()
{
    var k1=localStorage.getItem("id");
    var k2=localStorage.getItem("city");
    var k3=localStorage.getItem("shows");
    var k4=localStorage.getItem("day");
    var k5=localStorage.getItem("disp");
    var k6=localStorage.getItem("seatnum");
    var k7=localStorage.getItem("price");
    table+="<table border='3'><tr><th 'text-align: center;'>User Id</th><th>City</th><th>Show</th><th>Date</th><th>Screen-Timings</th><th>Seat No</th><th>Total Price</th>";
    table+="<tr><td>" + k1 + "</td>" + "<td>" + k2 + "</td>"+ "<td>" + k3 + "</td>"+ "<td>" + k4 + "</td>"+ "<td>" + k5 + "</td>"
    +  "<td>" + k6 + "<td>" + '₹' + k7 + "</td></tr></table>";
    
    document.getElementById("table1").innerHTML=table;  
    
}
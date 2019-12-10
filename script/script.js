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
var temp1=[]; var temp2=[]; var temp3=[]; var temp4=[]; var temp5=[]; var temp6=[]; var temp7=[];
var x;
var user_id;
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
    else if((strl1=="Chennai")||(strl1=="Coimbatore"))
    {
        document.getElementById('e2').disabled =false;
        document.getElementById('s4').disabled =false;
    }

    if(strl2=="Movie")
    {
        console.log(strl2);
        document.getElementById('s4').disabled=true;
        document.getElementById('s1').disabled=false;
        document.getElementById('s2').disabled=false;
        document.getElementById('s3').disabled=false;

    }
    else if(strl2=="Sports")
    {
        console.log(strl2);
        document.getElementById('s1').disabled=true;
        document.getElementById('s2').disabled=true;
        document.getElementById('s3').disabled=true;
        document.getElementById('s4').disabled=false;
        
    }
   
}
function validate(){
    var l1 = document.getElementById("city");
    var strl1 = l1.options[l1.selectedIndex].value;

    
    var l2 = document.getElementById("event");
    var strl2 = l2.options[l2.selectedIndex].value;

    var l3 = document.getElementById("shows");
    var strl3 = l3.options[l3.selectedIndex].value;

    var l4 = document.getElementById("day");
    
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
    console.log(booking);
    
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
                    console.log(comp3[userid1]);
                    var x=comp3[userid1];
                    localStorage.setItem("x",x);
                    
                    alert("Success");
                    
                    //self.location="file:///C:/Users/adharsh.s/Documents/GitHub/Task-3/source/book.html";
                    window.location.assign("../source/book.html");
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
    if (screen[0].checked == true) 
    {
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
    var twoMinutes = 60 * 2,
        display = document.querySelector('#time');
        startTimer(twoMinutes, display);
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
        setTimeout(() => {location.href="../source/index.html" ;deletetimer() 
    }, 120000);
    }, 1000);
    document.getElementById('content2').style.display='block';
    document.getElementById('content1').style.display='none';
}



function takeData(){
    
    //no.ofseat
    if(window.localStorage["noofseat"]!=null)
    noofseat=JSON.parse(window.localStorage["noofseat"]);
    noofseat.push(parseInt(document.getElementById("Numseats").value));
    window.localStorage["noofseat"]=JSON.stringify(noofseat);
    numseat=JSON.parse(localStorage.getItem("noofseat"));
    
    if(noofseat="")
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
    
    var userid1=localStorage.getItem("user_id");
    //seatnumber
    if(window.localStorage["seatnum"]!=null)
    seatnumber=JSON.parse(window.localStorage["seatnum"]);
    seatnumber.push(seatnum);
    window.localStorage["seatnum"]=JSON.stringify(seatnumber);

    
    if(count==numseat[userid1])
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
    document.getElementById('Numseats').value="";
    
    window.location.assign("../source/result.html");
    
}

function tabledisp()
{
    var userid1=localStorage.getItem("user_id");
    console.log(userid1);  
    
    temp1=JSON.parse(localStorage.getItem("user"));
    temp2=JSON.parse(localStorage.getItem("cities"));
    temp3=JSON.parse(localStorage.getItem("showss"));
    temp4=JSON.parse(localStorage.getItem("date"));
    temp5=JSON.parse(localStorage.getItem("showtime"));
    temp6=JSON.parse(localStorage.getItem("seatnum"));
    temp7=JSON.parse(localStorage.getItem("totalprice"));
    table+="<table border='3'><tr><th 'text-align: center;'>User Id</th><th>City</th><th>Show</th><th>Date</th><th>Screen-Timings</th><th>Seat No</th><th>Total Price</th>";
    table+="<tr><td>" + temp1[userid1] + "</td>" + "<td>" + temp2[userid1] + "</td>"+ "<td>" + temp3[userid1] + "</td>"+ "<td>" + temp4[userid1] + "</td>"+ "<td>" + temp5[userid1] + "</td>"
    +  "<td>" + temp6[userid1] + "<td>" +'Rs: ' + temp7[userid1] + "</td></tr></table>";
    
    document.getElementById("table1").innerHTML=table;  
    
}
function deletetable()
{
    var flag1=[]; var flag2=[]; var flag3=[]; var flag4=[]; var flag5=[]; var flag6=[]; 
    var flag7=[]; var flag8=[]; var flag9=[];
   
    var userid1=localStorage.getItem("user_id");

    if(typeof(Storage)!=="undefined")
    {
        
        //city
        var flag1= JSON.parse(localStorage.getItem("cities")) || [];
        
        flag1.splice(flag1.indexOf(userid1),1);
        localStorage.setItem("cities",JSON.stringify(flag1));

        //event
        var flag2= JSON.parse(localStorage.getItem("events")) || [];
        
        flag2.splice(flag2.indexOf(userid1),1);
        localStorage.setItem("events",JSON.stringify(flag2));

        //shows
        var flag3= JSON.parse(localStorage.getItem("showss")) || [];
        
        flag3.splice(flag3.indexOf(userid1),1);
        localStorage.setItem("showss",JSON.stringify(flag3));

        //date
        var flag4= JSON.parse(localStorage.getItem("date")) || [];
        
        flag4.splice(flag4.indexOf(userid1),1);
        localStorage.setItem("date",JSON.stringify(flag4));

        //screen-timings
        var flag5= JSON.parse(localStorage.getItem("showtime")) || [];
        
        flag5.splice(flag5.indexOf(userid1),1);
        localStorage.setItem("showtime",JSON.stringify(flag5));

        //no.of seat
        var flag6= JSON.parse(localStorage.getItem("noofseat")) || [];
        
        flag6.splice(flag6.indexOf(userid1),1);
        localStorage.setItem("noofseat",JSON.stringify(flag6));

        //seatno

        var flag7= JSON.parse(localStorage.getItem("seatnum")) || [];
        
        flag7.splice(flag7.indexOf(userid1),1);
        localStorage.setItem("seatnum",JSON.stringify(flag7));

        //total price

        var flag8= JSON.parse(localStorage.getItem("totalprice")) || [];
        
        flag8.splice(flag8.indexOf(userid1),1);
        localStorage.setItem("totalprice",JSON.stringify(flag8));

         //userid

         var flag9= JSON.parse(localStorage.getItem("userid")) || [];
        
         flag9.splice(flag9.indexOf(userid1),1);
         localStorage.setItem("userid",JSON.stringify(flag9));
    
    window.location.assign("../source/index.html");

}
}

function edit(){
    var flag6=[]; var flag5=[]; var flag7=[]; var flag8=[]; var flag9=[];
    var userid1=localStorage.getItem("user_id");

    if(typeof(Storage)!=="undefined")
    {
        //screen-timings
        var flag5= JSON.parse(localStorage.getItem("showtime")) || [];
        
        flag5.splice(flag5.indexOf(userid1),1);
        localStorage.setItem("showtime",JSON.stringify(flag5));

        //no.of seat
        var flag6= JSON.parse(localStorage.getItem("noofseat")) || [];
        
        flag6.splice(flag6.indexOf(userid1),1);
        localStorage.setItem("noofseat",JSON.stringify(flag6));

        //seatno

        var flag7= JSON.parse(localStorage.getItem("seatnum")) || [];
        
        flag7.splice(flag7.indexOf(userid1),1);
        localStorage.setItem("seatnum",JSON.stringify(flag7));

        //total price

        var flag8= JSON.parse(localStorage.getItem("totalprice")) || [];
        
        flag8.splice(flag8.indexOf(userid1),1);
        localStorage.setItem("totalprice",JSON.stringify(flag8));

        //userid

        var flag9= JSON.parse(localStorage.getItem("userid")) || [];
        
        flag9.splice(flag9.indexOf(userid1),1);
        localStorage.setItem("userid",JSON.stringify(flag9));

        window.location.assign("../source/book.html");
        
    }

}

function deletetimer() 
{

    var flag1=[]; var flag2=[]; var flag3=[]; var flag4=[]; var flag5=[]; var flag6=[]; var flag9=[];
    
    var userid1=localStorage.getItem("user_id");

    if(typeof(Storage)!=="undefined")
    {
        
        //city
        var flag1= JSON.parse(localStorage.getItem("cities")) || [];
        
        flag1.splice(flag1.indexOf(userid1),1);
        localStorage.setItem("cities",JSON.stringify(flag1));

        //event
        var flag2= JSON.parse(localStorage.getItem("events")) || [];
        
        flag2.splice(flag2.indexOf(userid1),1);
        localStorage.setItem("events",JSON.stringify(flag2));

        //shows
        var flag3= JSON.parse(localStorage.getItem("showss")) || [];
        
        flag3.splice(flag3.indexOf(userid1),1);
        localStorage.setItem("showss",JSON.stringify(flag3));

        //date
        var flag4= JSON.parse(localStorage.getItem("date")) || [];
        
        flag4.splice(flag4.indexOf(userid1),1);
        localStorage.setItem("date",JSON.stringify(flag4));

        //screen-timings
        var flag5= JSON.parse(localStorage.getItem("showtime")) || [];
        
        flag5.splice(flag5.indexOf(userid1),1);
        localStorage.setItem("showtime",JSON.stringify(flag5));

        //no.of seat
        var flag6= JSON.parse(localStorage.getItem("noofseat")) || [];
        
        flag6.splice(flag6.indexOf(userid1),1);
        localStorage.setItem("noofseat",JSON.stringify(flag6));

        //userid

        var flag9= JSON.parse(localStorage.getItem("userid")) || [];
        
        flag9.splice(flag9.indexOf(userid1),1);
        localStorage.setItem("userid",JSON.stringify(flag9));

    }
}
function preview(){
    var userid1=localStorage.getItem("user_id");
    var z=localStorage.getItem("x");
    console.log(userid1);
    console.log(z);
    if(z=='Cricket')
    {
    var a = document.createElement("IMG");
    a.setAttribute("src", "../resource/IPL.jpg");
    a.setAttribute("width", "350");
    a.setAttribute("height", "200");
    a.setAttribute("alt", "Cricket");
    document.body.appendChild(a);
    print1(z);
    }
    else if(z=='SARKAR')
    {
        var a = document.createElement("IMG");
        a.setAttribute( "src", "../resource/sarkar.jpg");
        a.setAttribute("width", "350");
        a.setAttribute("height", "200");
        a.setAttribute("alt", "Sarkar");
        document.body.appendChild(a);
        print1(z);
        
    }
    else if(z=='ENPT')
    {
        var a = document.createElement("IMG");
        a.setAttribute("src", "../resource/enpt1.jpg");
        a.setAttribute("width", "350");
        a.setAttribute("height", "200");
        a.setAttribute("alt", "ENPT");
        document.body.appendChild(a);
        print1(z);
    }
    else if(z=='COMALI')
    {
        var a = document.createElement("IMG");
        a.setAttribute("src", "../resource/comali.jpg");
        a.setAttribute("width", "350");
        a.setAttribute("height", "200");
        a.setAttribute("alt", "Comali");
        document.body.appendChild(a);
        
        print1(z);
    }
  }
  function download()
  {
    window.print();
  }
  function print1(y)
  {
 
      if(y=="COMALI")
      {
        
        document.getElementById('print').style.display='block';
        document.getElementById('heading').style.display='block';
          var detail="Actor : Jayam Ravi"+ "<br>" + "Actress : KajalAgarwal" +"<br>" + "Comedian : Yogi Babu" +"<br>"
          + "Director : Pradeep Ranganathan" + "<br>" + "Music Director : Hiphop Aadhi" ;
          document.getElementById('print').innerHTML=  detail;
          
      }
     else if(y=="SARKAR")
      {
        document.getElementById('print').style.display='block';
        document.getElementById('heading').style.display='block';
          var detail="Actor : Vijay"+ "<br>" + "Actress : Keerthy Suresh" +"<br>" + "Comedian : Yogi Babu" +"<br>"
          + "Director : A.R. Murugudoss" + "<br>" + "Music Director : A.R. Rahman" ;
          document.getElementById('print').innerHTML=  detail;  
      }

      else if(y=="ENPT")
      {
        document.getElementById('print').style.display='block';
        document.getElementById('heading').style.display='block';
          var detail="Actor : Dhanush"+ "<br>" + "Actress : Megha Aakash" +"<br>" + "Comedian : Sathish" +"<br>"
          + "Director : Gautham Vasudhev Menon" + "<br>" + "Music Director : Darbuka Siva" ;
          document.getElementById('print').innerHTML=  detail;  
      }
      else if(y=="Cricket")
      {
        document.getElementById('print').style.display='block';
        document.getElementById('heading').style.display='block';
          var detail="CSK vs MI" +"<br>" + "Captain : M.S. Dhoni (CSK)" +"<br>" + "Captain : Rohith Sharma (MI)"
          + "<br>" + "Head to Head : CSK-8 MI-5";
          document.getElementById('print').innerHTML=  detail;  
      }

  }


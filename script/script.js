var comp1="";
var comp2="";
var comp3="";
var booking;
var film=new Array();
var final=new Array();
var disp= new Array();
var mytable=new Array();
var id=0;
var noofseat=0;


function Submit()
{
    comp1 = document.getElementById("city").value;
    console.log(comp1);
    comp2 = document.getElementById("event").value;
    comp3 = document.getElementById("shows").value;
    
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
                        window.localStorage["final"]=JSON.stringify(final)
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
        document.getElementById('content2').style.display='block';
        console.log(screen[0]);
    }
    else if (screen[1].checked == true) {
        alert("You have chosen the screen2");
        document.getElementById('content2').style.display='block';
        //console.log(screen[1].value);
     
    }
    else if (screen[2].checked == true) {
        alert("You have chosen the screen3");
        document.getElementById('content2').style.display='block';
    }
    else{
        alert("Choose a Screen");
    }
    
    
}

function takeData(){
    id = parseInt(document.getElementById("Username").value);
    noofseat = parseInt(document.getElementById("Numseats").value);
    if(isNaN(id))
    {
        alert("Enter the User Id");
    }
    else if(isNaN(noofseat))
    {
        alert("Enter No.of Seats to be booked");
    }
    else {
        alert("Select the required seats");
        document.getElementById('ss').style.display='block';
    }

}
function updateTextArea()
{
    var seatselect=new Array();
    seatselect = document.getElementsByClassName("seats");
    var seatnum = "";
    for(var i=0;i<120;i++)
    {
        if(seatselect[i].checked)
        {
            
            seatnum += seatselect[i].value;
            
        }
        
    }
    console.log(seatnum);
    localStorage.setItem("seatnum",seatnum);
    
}
//function table()
//{
  //  mytable="<tr><th>City</th><select><option>disp1</option></select><th>Events</th><th>Shows</th><th>Screen</th><th>Seat No</th><th>Amount</th></tr>\n";
    
//}
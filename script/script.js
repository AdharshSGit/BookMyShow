var comp1="";
var comp2="";
var comp3="";
var booking;
var film=new Array();
var final=new Array();
var disp= new Array();
var mytable=new Array();
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
                        final.push(JSON.stringify(film));
                        console.log(final);
                        //console.log(booking[0].screen[0].s1);
                        localStorage.setItem("final0",final[0]);
                        localStorage.setItem("final1",final[1]);
                        localStorage.setItem("final2",final[2]);
                        localStorage.setItem("film",film);
                    }
                    console.log(final[0]);
                    alert("Success");
                    
                    self.location="file:///C:/Users/adharsh.s/Documents/GitHub/Task-3/source/book.html";
                }   
            }
        }       
    }
    
}
function display()
{
    
    disp1 = localStorage.getItem("final0");
    disp2 = localStorage.getItem("final1");
    disp3 = localStorage.getItem("final2");
    
    console.log(disp1);
    document.getElementById("result").innerHTML =  disp1 +"<br>" + disp2 + "<br>"+ disp3;
    
    <tr><td><select><option value="final0">1</option>
    <option value="final1">2</option>
    <option value="final2">2</option>
    </select></td></tr>;  
}
function table()
{
    mytable="<tr><th>City</th><select><option>disp1</option></select><th>Events</th><th>Shows</th><th>Screen</th><th>Seat No</th><th>Amount</th></tr>\n";
    
}
var comp1="";
var comp2="";
var comp3="";
var booking;
var film;
function Submit(){
     comp1 = document.getElementById("city").value;
     console.log(comp1);
     comp2 = document.getElementById("event").value;
     comp3 = document.getElementById("shows").value;
    
    booking=[{city:"Chennai",event:"Movie", shows:"SARKAR",screen:["PVR-10AM","IMAX-1PM","INOX-4PM"]},
        {city:"Chennai",event:"Movie", shows:"ENPT",screen:["PVR-10AM","IMAX-1PM","INOX-4PM"]},
        {city:"Chennai",event:"Movie", shows:"COMALI",screen:["PVR-10AM","IMAX-1PM","INOX-4PM"]},
        {city:"Coimbatore",event:"Movie", shows:"SARKAR",screen:["PVR-10AM","IMAX-1PM","INOX-4PM"]},
        {city:"Coimbatore",event:"Movie", shows:"ENPT",screen:["PVR-10AM","IMAX-1PM","INOX-4PM"]},
        {city:"Coimbatore",event:"Movie", shows:"COMALI",screen:["PVR-10AM","IMAX-1PM","INOX-4PM"]},
        {city:"Pollachi",event:"Movie", shows:"SARKAR",screen:["PVR-10AM","IMAX-1PM","INOX-4PM"]},
        {city:"Pollachi",event:"Movie", shows:"ENPT",screen:["PVR-10AM","IMAX-1PM","INOX-4PM"]},
        {city:"Pollachi",event:"Movie", shows:"COMALI",screen:["PVR-10AM","IMAX-1PM","INOX-4PM"]},
        {city:"Trichy",event:"Movie", shows:"SARKAR",screen:["PVR-10AM","IMAX-1PM","INOX-4PM"]},
        {city:"Trichy",event:"Movie", shows:"ENPT",screen:["PVR-10AM","IMAX-1PM","INOX-4PM"]},
        {city:"Trichy",event:"Movie", shows:"COMALI",screen:["PVR-10AM","IMAX-1PM","INOX-4PM"]},
        {city:"Chennai",event:"Sports", shows:"Cricket",screen:["Chepauk(IPL)-3PM","Chepauk(IPL)-8PM"]},
        {city:"Coimbatore",event:"Sports", shows:"Cricket",screen:["NehruStadium(TNPL)-5PM"]}];

        localStorage.setItem("booking", JSON.stringify(booking));
        booking = JSON.parse(localStorage.getItem("booking"));
        console.log(typeof booking); //object
        console.log(booking); //[1, 2, 3]
        scompare();
}
function compare(){
    console.log(booking[4].city);
    for(var i=0;i<=booking.length;i++)
    {
        if((comp2==booking[i].event)&&(comp3==booking[i].shows))
        {
            film=booking.screen.value[i];
            alert("Success");
        } 
}
document.getElementById("result").innerHTML = film;    
}
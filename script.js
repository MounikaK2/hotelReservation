function check(){
    var temp=1;
    var name=document.getElementById("fname").value;
    var mn=document.getElementById("mobileNum").value;
    var pw=document.getElementById("mail").value;
    var depart=document.getElementById("departDate").value;
    var dTme=document.getElementById("departTime").value;
    var d=true;
    var dt=true;

    var rDat=document.getElementById("returnDate").value;
    var rtme=document.getElementById("returnTime").value;
    var rd=true;
    var rt=true;

    var currDate=new Date();
    var dTime=new Date(depart);
    var dl=dTme.split(':');
    var dHour=dl[0];
    var dMin=dl[1];

    var rTime=new Date(rDat);
    var rl=rtme.split(':');
    var rHour=rl[0];
    var rMin=rl[1];

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (name==""){
        temp=0;
        document.getElementById("fname").style.border="2px solid red";
    }
    else{
        document.getElementById("fname").style.border="0px";
    }

    if (mn.length!=10){
        temp=0;
        document.getElementById("mobileNum").style.border="2px solid red";
    }
    else{
        document.getElementById("mobileNum").style.border="0px";
    }

    if(pw.match(validRegex)){
        document.getElementById("mail").style.border="0px";
    }
    else{
        temp=0;
        document.getElementById("mail").style.border="2px solid red";
    }

    if(currDate.getFullYear()>dTime.getFullYear()){
        d=false;
    }
    else if(currDate.getFullYear()==dTime.getFullYear()){
        if (currDate.getMonth()>dTime.getMonth()){
            d=false;
        }
        else if(currDate.getMonth()==dTime.getMonth()){
            if(currDate.getDate()>dTime.getDate()){
                d=false;
            }
            else if (currDate.getDate()==dTime.getDate()){
                if (currDate.getHours()>dHour){
                    dt=false;
                }
                else if (currDate.getHours()==dHour){
                    if(currDate.getMinutes()>dMin){
                        dt=false;
                    }
                }
            }
            
        }
    }
    if (d==true){
        document.getElementById("departDate").style.border="0px";
    }
    else{
        temp=0;
        document.getElementById("departDate").style.border="2px solid red";
    }

    if (dt==true){
        document.getElementById("departTime").style.border="0px";
    }
    else{
        temp=0;
        document.getElementById("departTime").style.border="2px solid red";
    }
    //check in
    if(dTime.getFullYear()>rTime.getFullYear()){
        rd=false;
    }
    else if(dTime.getFullYear()==rTime.getFullYear()){
        if (dTime.getMonth()>rTime.getMonth()){
            rd=false;
        }
        else if(dTime.getMonth()==rTime.getMonth()){
            if(dTime.getDate()>rTime.getDate()){
                rd=false;
            }
            else if (dTime.getDate()==rTime.getDate()){
                if (dHour>rHour){
                    rt=false;
                }
                else if (dHour==rHour){
                    if(dMin>rMin){
                        rt=false;
                    }
                }
            }
            
        }
    }
    if (rd==true){
        document.getElementById("returnDate").style.border="0px";
    }
    else{
        temp=0;
        document.getElementById("returnDate").style.border="2px solid red";
    }

    if (rt==true){
        document.getElementById("returnTime").style.border="0px";
    }
    else{
        temp=0;
        document.getElementById("returnTime").style.border="2px solid red";
    }

    if (temp==1){
        alert("FORM SUBMITTED")
    }
    else{
        alert("Invalid or missing values")
    }
}
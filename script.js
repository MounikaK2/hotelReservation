function check(){
    var temp=1;
    var name=document.getElementById("fname").value;
    var mn=document.getElementById("mobileNum").value;

    if (name==""){
        temp=0;
        document.getElementById("fname").style.border="2px solid red";
    }
    if (mn.length!=10){
        temp=0;
        document.getElementById("mobileNum").style.border="2px solid red";
    }
    if (temp==1){
        alert("FORM SUBMITTED")
    }
    else{
        alert("FILL THE MISSING FIELDS")
    }
}
function currenttime(){
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var session="AM"
    if(h==0)//h=0-12
    h=12;
    if(h>12){//h>12-session-pm
        h=h-12;
        session="PM";
    }
    h=(h<10) ? "0" + h : h//double digits
    m=(h<10) ? "0" + m : m
    s=(h<10) ? "0" + s : s
    //var time= h + ":" + m + ":" + s + " " + session
    
    var time=`${h} : ${m} : ${s} ${session}`;
    document.getElementById("digitalClock").innerText=time;
    document.getElementById("digitalClock").textContent=time;
setTimeout(currenttime,1000);
}

currenttime();
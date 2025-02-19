function showTime(){
    var todayDate=new Date();
    var todayDateArray=String(todayDate).split(" ");
    var hrs=todayDate.getHours();
    var mins=todayDate.getMinutes();    
    var secs=todayDate.getSeconds();
    mins=mins<10 ? "0"+mins : mins;
    secs=secs<10 ? "0"+secs : secs;
    document.getElementById("date").textContent="{"+todayDateArray[2]+todayDateArray[1]+todayDateArray[3]+"}";
    document.getElementById("day").textContent="{"+todayDateArray[0]+"}";
    document.getElementById('hrs').textContent="{"+hrs+":";
    document.getElementById('mins').textContent=mins+":";
    document.getElementById('secs').textContent=secs+"}";
}
setInterval(showTime,1000);
showTime();
const enddate=new Date(prompt("Enter your Date with time( 25 aug  Year , 01:00:00)")).getTime();
const startdate=new Date().getTime();

let x=setInterval(function updateTimer(){
  const now=new Date().getTime();
  const distanceCovered=now-startdate;
  const distancePending=enddate-now;

  //calculate days , hrs.,min,secs
  //1day=24*60*60*1000 ms
  const onedayinms=(24*60*60*1000);
  const onehrinms=(60*60*1000);
  const oneminms=(60*1000);
  const days=Math.floor((distancePending)/(onedayinms));
  const hours=Math.floor((distancePending)%(onedayinms)/onehrinms);
  const minu=Math.floor(distancePending%onehrinms/oneminms);
  const sec=Math.floor(distancePending%oneminms/1000);

  //populate in UI
  document.getElementById("days").innerHTML=days;
  document.getElementById("hrs").innerHTML=hours;
  document.getElementById("min").innerHTML=minu;
  document.getElementById('sec').innerHTML=sec;
//Calculation width percentage for progress bar
const totaldistance=enddate-startdate;
const percentagedistance=(distanceCovered/totaldistance)*100;

  //  set width for progress bar
  document.getElementById('progress-bar').style.width=percentagedistance+"%";


  if(distancePending<0){
    clearInterval(x);
    document.getElementById("countdown").innerHTML="Expired";
      document.getElementById('progress-bar').style.width= "100%";


  }
},1000);


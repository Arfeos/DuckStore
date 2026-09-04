 const targetDate = new Date("Sep 4, 2026 23:59:59").getTime();

 const updateTimer= setInterval(()=>{
    const now = new Date().getTime();
    const difference = targetDate - now;

    if(difference <= 0){
        clearInterval(updateTimer);
        return;
    }
    const hours= Math.floor(difference/(1000*60*60));
    const minutes= Math.floor((difference%(1000*60*60))/(1000*60));
    const seconds= Math.floor((difference%(1000*60))/1000);
      document.getElementById("horas").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutos").textContent = String(minutes).padStart(2, '0');
    document.getElementById("segundos").textContent = String(seconds).padStart(2, '0');
 })
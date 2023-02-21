const countdown5mart = () => {
    const countDate = new Date(" Mart 5, 2023 00:00:00").getTime();
    var now = new Date().getTime();
    var gap = countDate - now;
    
    // vaxtlar
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //vaxt text leri
    var dayText = Math.floor(gap / day); 
    var hourText = Math.floor((gap  % day) / hour);
    var minuteText = Math.floor((gap % hour) / minute);
    var secondText = Math.floor((gap % minute) / second);

    //vaxt bitende
    if (gap<=0) {
        document.querySelector(".expired5").innerText = "Expired!";
        dayText = 0;
        hourText = 0;
        minuteText = 0;
        secondText = 0;
    };

    //vaxt text lerininin website a kocurulmesi
    document.querySelector(".day5mart").innerText = dayText;
    document.querySelector(".hour5mart").innerText = hourText;
    document.querySelector(".minute5mart").innerText = minuteText;
    document.querySelector(".second5mart").innerText = secondText;

};


const countdown12mart = () => {
    const countDate = new Date(" Mart 12, 2023 00:00:00").getTime();
    var now = new Date().getTime();
    var gap = countDate - now; 
    
    // vaxtlar
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //vaxt text leri
    var dayText = Math.floor(gap / day); 
    var hourText = Math.floor((gap  % day) / hour);
    var minuteText = Math.floor((gap % hour) / minute);
    var secondText = Math.floor((gap % minute) / second);

    //vaxt bitende
    if (gap<=0) {
        document.querySelector(".expired12").innerText = "Expired!";
        dayText = 0;
        hourText = 0;
        minuteText = 0;
        secondText = 0;
    };

    //vaxt text lerininin website a kocurulmesi
    document.querySelector(".day12mart").innerText = dayText;
    document.querySelector(".hour12mart").innerText = hourText;
    document.querySelector(".minute12mart").innerText = minuteText;
    document.querySelector(".second12mart").innerText = secondText;
};


setInterval(countdown5mart, 1000);
setInterval(countdown12mart, 1000);

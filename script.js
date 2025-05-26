setInterval(()=>{
    date=new Date();

    hourt=date.getHours();
    minutet=date.getMinutes();
    secondt=date.getSeconds();

    hrotate=30*hourt+(minutet/2);
    mrotate=6*minutet;
    srotate=6*secondt;

    hour.style.transform=`rotate(${hrotate}deg)`;
    minute.style.transform=`rotate(${mrotate}deg)`;
    second.style.transform=`rotate(${srotate}deg)`;
},1000);

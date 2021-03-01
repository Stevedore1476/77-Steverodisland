var family = [
    "Nirmal Sagayaraj",
    "Immaculate Savarimuthu",
    
    "Antony Sagayaraj"
  ];
  
  var images = [
    "WIN_20191119_1_9_20_36_Pro.jpg",
    "DSCF2125.jpg",
    "20151018_143048.jpg",
    ];
  

  function nextslide() { document.getElementById("Family").innerHTML=family[i];
    document.getElementById("album").src = images[i];
    i++; document.getElementById("audio").play();
   
  }
  
  
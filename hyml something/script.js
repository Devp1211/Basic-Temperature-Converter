window.onload = function() {
    let c = document.getElementById("celcius");
    let f = document.getElementById("fahr");
    let k = document.getElementById("kel");
    
    c.oninput = function() {
        f.value = (c.value * 9/5) + 32;
       //k.value = (c.value + 273.15);
    };
  
    f.oninput = function() {
        c.value = (f.value - 32) * 5/9;
        k.value = (f.value - 32) * 5/9 + 273.15;
    };
    k.oninput = function(){
        c.value = (k.value - 273.15);
        f.value = 1.8 * (k.value - 273.15) + 32;
    }    
  };

let para = document.querySelector(".time");


function change() {
    let d = new Date();

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    //console.log(h, m, s);
    let ans = h + ":" + m + ":" + s;
    para.innerText = ans;
}

 setInterval(change,1000);


 let div = document.querySelector(".box");

function random1(){
     const red = Math.floor(Math.random() * (255)) ;
     const green = Math.floor(Math.random() * (255));
     const blue = Math.floor(Math.random() * (255)) ;
     const rgbColor = `rgb(${red}, ${green}, ${blue})`;
   
     let rgb = rgbColor;
     return rgb
}





 function shadow(){
     let r1 = random1();
     let r2 = random1();
     let r3 = random1();
     let r4 = random1();
  
     div.style.boxShadow = `0px -11px 12px 0px ${r1}, 11px 0px 12px ${r2}, 0px 11px 12px ${r3}, -11px 0px 12px ${r4}`;
    

}

setInterval(shadow,1000);

function author(){
    let para2 = document.querySelector(".text");
  
    para2.innerHTML="&#9400   Made   By   Surajit";
    setTimeout(()=>{
        para2.innerText="";
    },2000);
}

setInterval(author,3000);
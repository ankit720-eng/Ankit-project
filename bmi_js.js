let btn=document.querySelector("button");
let msg=document.querySelector(".msg")
 calculation=()=>{let bmi_h=document.querySelector(".bmi_ht");
 let bmi_w=document.querySelector(".bmi_wt")
 

let wt_val=bmi_w.value;
 let ht_val=bmi_h.value;
 let sum=wt_val/(ht_val*ht_val)
msg.innerText=`${sum}Kg/m^2`}


btn.addEventListener("click",(evt)=>{
    calculation();
evt.preventDefault();
    
    
    
 })

// console.log(wt_val)
// // let a=prompt("Enter no")
// // let s=a*a
// // console.log(s)



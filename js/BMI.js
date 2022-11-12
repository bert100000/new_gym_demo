const getBMI=(height, weight,point=2)=>(weight/(height/100)**2).toFixed(point);

//tag,class,id
const elementEl=document.querySelector(".title");
const calcEl=document.querySelector("#calc");
const heightEl=document.querySelector("#height");
const weightEl=document.querySelector("#weight");
console.log(heightEl,weightEl);
console.log(elementEl);
console.log(calcEl);


elementEl.innerText="BMI CALC";
calcEl.innerHTML="<b>計算</b>"



calcEl.addEventListener("click",()=>{
    //alert("click!");//
    let height=heightEl.value;
    let weight=weightEl.value;
    
    if(height=="" || weight==""){
        alert("輸入不得為空");
        return;
    }
    let bmi=getBMI(height,weight);
    if(isNaN(bmi)){
        alert("請輸入數值!");
        return;  
    }




    console.log(height,weight,getBMI(height,weight));
    alert(`BMI:${bmi}`);
});
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

let comments =[
    {'bmi':18.5,'color':'white','comment':'有點過輕，請多攝取營養'},
    {'bmi':24,'color':'blue','comment':'正常範圍，繼續保持'},
    {'bmi':27,'color':'green','comment':'有點過重，請增加運動'},
    {'bmi':30,'color':'red','comment':'超重，嚴重超標值請注意身體健康'},
];




calcEl.addEventListener("click",()=>{
    //alert("click!");//
    let bmiEl=document.querySelector("#comment .bmi");
    console.log(bmiEl);

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


   console.log((bmi));
    //alert(`BMI:${bmi}`);
   bmiEl.innerText= bmi;

   let comments =[
    {'bmi':18.5,'color':'white','comment':'有點過輕，請多攝取營養'},
    {'bmi':24,'color':'blue','comment':'正常範圍，繼續保持'},
    {'bmi':27,'color':'green','comment':'有點過重，請增加運動'},
    {'bmi':30,'color':'red','comment':'超重，嚴重超標值請注意身體健康'},
];

   bmiEl.style.color="white";
   for(let i=0;i<comments.length;i++){
        if(bmi>=comments[i].bmi){
            bmiEl.style.color=comments[i]["color"];
            break;
        }
   }
});
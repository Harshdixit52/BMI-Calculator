const form  = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault()
   const height = document.querySelector("#height").value;
   const weight = document.querySelector("#weight").value;
   const result =document.querySelector('#result');
   
   if(height === "" || height < 0 ||  isNaN(height) || height==="0") {
    
    console.log("pls enter height  ");      
}
  else if(weight === "" || weight < 0 ||  isNaN(weight) || weight==="0" ){
    
    console.log("pls enter weight");
}   else { 
     // const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
   // result.innerHTML= `<span>${bmi}</span>`;
   let a= 24.9;
   let b =18.6;
   
    if(bmi > a){
        result.innerHTML= `<span>your bmi is ${bmi} and it is over weight</span>`;
    } else if(bmi > b){
        result.innerHTML= `<span>your bmi is ${bmi} and it is normal weight</span>`;
    }
    else if(bmi < b){
        result.innerHTML= `<span>your bmi is ${bmi} and it is under weight</span>`;
    }
    
}

 


})


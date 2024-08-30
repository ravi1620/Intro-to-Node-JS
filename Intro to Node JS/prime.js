let primeFunction=(n)=>{
    for(let a=2; a<=n; a++){
let isPrime=true;
        for(let b=2; b*b<=a; b++){
if(a%b ===0){
   isPrime=false; 
   break;
}
        }
        if(isPrime){
console.log(a);
        }
    }
}


let fibanocciSeries=(n)=>{
    for(let a=0; a<=n; a++){

        for(let b=1; b+a > a; b++){
if(b+a <a){
console.log("It is not a fibanocci series")
   break;
}
        }

        console.log(b);
    }
}

export  {primeFunction,fibanocciSeries};  





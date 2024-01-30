function med (a,b,c){
    let rez=(a+b+c)/3;
    return rez;
} 

console.log(med(3,5,7));

function sum (a,b,c){
    let rez=(a+b+c);
    return rez;
} 

console.log(sum(3,5,7));

function dif (a,b,c){
    let rez;
    if(a<b && a<c) { rez=a} else if(b<a && b<c){ rez=b} else{rez=c}
   
    return rez;
} 

console.log(dif(3,5,7));




console.log("__________________________________________________________________________");


let v2= function(a,b,c){
    let rez=(a+b+c)/3;
    return rez;
}

console.log(v2(3,5,7));

let v3= function(a,b,c){
    if(a>b && a>c) { rez=a} else if(b>a && b>c){ rez=b} else{rez=c}
    return rez;
}

console.log(v2(3,5,7));

console.log("__________________________________________________________________________");


const prod = () => {
    let produs = 1;
  
    for (let i = 1; i <= 15; i += 2) {
      produs *= i;
    }
  
    return produs;
  };

  console.log(prod());




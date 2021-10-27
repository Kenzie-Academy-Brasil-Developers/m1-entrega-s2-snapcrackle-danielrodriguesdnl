function snapCrackle(maxValue) {
   
    let num1 = []
    for (let i=1; i<=maxValue; i++) {
        if (i % 5 === 0 && i % 2 !== 0) {
            num1.push(" SnapCrackle");
        } else if (i % 2 !== 0) {
            num1.push(" Snap");
        } else if (i % 5 === 0) {
            num1.push(" Crackle");
        } 
        else {
            num1.push(" "+i); 
        }
     }   
return num1;
}


//Como conferir se o número é primo no loop sem ter que utilizar
//verificações para 2,3,5 e 7 

function snapCracklePrime(maxValue) {
   
    let num1 = []
    
    for (let i=1; i<=maxValue; i++) {
       
        if (i%2===0){
            if (i===2){
                num1.push(" Prime");
            } else if (i%10===0){
                num1.push(" Crackle");
            } else {
                num1.push(" "+i);
            }
        } else {
            if (i===1){
                num1.push("Snap");
            } else if (i===5) {
                num1.push(" SnapCracklePrime");
            } else if (i%5===0) {
                num1.push(" SnapCrackle");
            } else if (i!==3 && i%3===0){
                num1.push(" Snap");
            } else {
                num1.push(" SnapPrime");
            }
        }       
    }   
    return num1;
}       
        
        
        
        // else {
        //     num1.push(" "+i);  
        // }
        // if (i % 2 !== 0) {
        //     num1.pop()
        //     num1.push(" Snap");
        // }  
        // if (i % 5 === 0) {
        //     num1.pop()
        //     num1.push(" Crackle");
        // } 
        // if (maxValue % i === 0 && i % i === 0 && i !== 1){
        //     num1.pop()
        //     num1.push("Prime");
        // }
        // if (maxValue % i ===0  &&  i % 2 !== 0 ) {
        //     num1.pop()
        //     num1.push(" SnapPrime");
        // }    
        // if (maxValue % i ===0 && i % 5 === 0 && i % 2 !== 0) {
        //     num1.pop()
        //     num1.push(" SnapCracklePrime");
         

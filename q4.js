//prime nos between 1 - 20
function calcprime(n){
    let j = 0, res = [];
    for(let i=2;i <= n; i++){
        if(!((i % 2 === 0) || (i % 3 === 0) || (i % 5 === 0))){
            res[j++] = i;
        }
    }
    return res;
}
console.log(calcprime(100));
// Find the array element which has no pair. Ex: arr=(1,2,3,2,1) res=3
let arr=[1,1,1,1,2];
function compare(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            
            if((arr[i] === arr[j])){
                break;
            }
            if((j === arr.length-1) && (arr[i] !== arr[j])){
                return arr[i];
            }
        }
        
    }
}

console.log(compare(arr));
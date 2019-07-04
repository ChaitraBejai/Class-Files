// Find the array element which has no pair. Ex: arr=(1,2,3,2,1) res=3

function compare(arr){
    let res = [],i,j;
    for(j=0;j<arr.length;j++){
        for(i=j+1;i<arr.length;i++){
            if((i!=j) && (arr[i]===arr[j])){
                    res[j] = 1;
            }
        }
    }
    for(i=0;i<arr.length;i++){
        if(res[i]!=1){
            return arr[i];
        }
    }
}
let arr=[1,1,1,1,2];
console.log(compare(arr));
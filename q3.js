// Find the array element which has no pair. Ex: arr=(1,2,3,2,1) res=3
let arr=[0,2,0,4,0,0,3,0], count =0;
function compare(arr){
    for(let i=0;i<arr.length;i++){
        if((arr[i] === 0) && (0 < i) && (i < arr.length-1)){
            ++count;
        }
        if(arr[i]>1){ //checks for elt greater than one block
            let cnt = 0; // to keep count on how many blocks away the next block is found
            for(let j=i+1; j<arr.length; j++){ // checks for elements to its right
                if(arr[j] > 1){ // finds which element is greater than one block 
                    if(arr[i] > arr[j]){
                        count += cnt*(arr[j]-1);
                        break;
                    }
                    else if(arr[i] <= arr[j]){
                        count += cnt*(arr[i]-1);
                        break;
                    }
                }
                ++cnt;
            }
        }
    }
    return count;
}

console.log(compare(arr));
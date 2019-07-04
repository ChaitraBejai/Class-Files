let arr = [1,2,3,5,7], arr1 = [2,4,6,8,9,10]

let finalArr = arr.filter(item => arr1.includes(item))
console.log(finalArr)

// function intersection(arr, arr1){
//     let res = [], n=0;
//     for(i=0; i<arr.length; i++){
//         for(j=0; j<arr1.length; j++){
//             if(arr[i] === arr1[j]){
//                 res[n++] = arr[i];
//             }
//         }
//     }
//     return res;
// }

// let intersection = arr.filter((_,index,ar) => {
//     let newar = arr1.filter((item) => {
//         if(ar.includes(item)){
//             return item
//         }
//     })
//     console.log(newar)
// })
// console.log(intersection)


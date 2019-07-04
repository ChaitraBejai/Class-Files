const arr = [1,2,3,4,5]
let arrCheck = arr.map((item, index) => item + index + 2)

// console.log(arrCheck)

let arrCheck2 = arr.filter((item, index) => {
    if(item % 2 === 0) {
        return item
    }
})

console.log(arrCheck2)
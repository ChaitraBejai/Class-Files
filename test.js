const arr = [1,2,3,4,5]

let sum = 0

const arrSum = arr.map((item, index, arr) => item)

console.log(arrSum)
var item1=5;
function name1(item1, item2) {
    console.log(item1, item2)
    this.item1 = 3
    console.log(this.item1)
}
const name2 = (item2, item3) => {
    var item2=6;

    console.log(item2, item3)
    console.log(this.item2)
}

name1(1, 2)

name2(3, 4)
//find the lowercase alphabt in nam and capitalize it
let arr = [
    {
        name: "Abcd", role: "TL"
    },
    {
        name:"bcd", role: "Manager"
    },
    {
        name: "Cdew", role: "VP"
    }
]
arr.forEach((item) => {
    if(item.name.charCodeAt(0) > 97){
        let first = item.name.split("")
        first[0] = first[0].toUpperCase()
        item.name = first.join("")
    }
    
    return item
    
})
console.log(arr)
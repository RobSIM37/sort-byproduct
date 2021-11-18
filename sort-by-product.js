const sortByProduct=arr=>{
    const products = [];
    arr.forEach((e,i)=>products.push({i, value: e*(i+1)}));
    return products.sort((a,b)=>a.value-b.value).map(e=>e.value/(e.i+1))
}

console.log(sortByProduct([23, 2, 3, 4, 5]).join(', '));
console.log(sortByProduct([10, 12, 14, 16, 18]).join(', '));
console.log(sortByProduct([11, 9, 7, 5, 5, 3, 1, 5]).join(', '));
const sortByProduct=arr=>{
    const products = [];
    arr.forEach((e,i)=>products.push(`${e*(i+1)}:${i}`));
    return products.sort((a,b)=>parseInt(a.split(':')[0])-parseInt(b.split(':')[0]))
                    .map(e=>parseInt(e.split(':')[0])/(parseInt(e.split(':')[1])+1))
}

console.log(sortByProduct([23, 2, 3, 4, 5]).join(', '));
console.log(sortByProduct([10, 12, 14, 16, 18]).join(', '));
console.log(sortByProduct([11, 9, 7, 5, 5, 3, 1, 5]).join(', '));
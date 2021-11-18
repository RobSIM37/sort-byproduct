const sortByProduct=arr=>arr.map((v,i)=>v*(i+1)).sort((a,b)=>a-b);

console.log(sortByProduct([23, 2, 3, 4, 5]).join(', '));
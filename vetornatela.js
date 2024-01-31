let valores = [8, 1, 7, 4, 2, 9] 
valores.sort()
//console.log(valores)
/* console.log([0])
   console.log([1])
   console.log([2])
   console.log([3])
   console.log([4])
   console.log([5]) 

   for(let pos= 0; pos < valores.length; pos++) {
        console.log(`A posiçáo ${pos} tem o valor ${velores[pos]}`)
   } */
   for(let pos in valores) {
    console.log(`A posiçáo ${pos} tem o valor ${velores[pos]}`)
   }
function differenceInAges(ages){
    const max = Math.max(...ages)
    const min = Math.min(...ages)
    const difference = max - min
    return [min,max,difference];
  }
console.log(differenceInAges([82, 15, 6, 38, 35]))  
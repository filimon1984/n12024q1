function addLength(str) {
    const x = str.split(' ').map(item => `${item} ${item.length}`)
    return x
}

console.log(addLength('apple ban'));
    
    
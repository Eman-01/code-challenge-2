//function that accepts two numbers and generates an array between them
function generateArray(val1, val2){
    const array=[];
    for(i = val1;i <= val2; i++){
        array.push(i);
    }
    return array;
}
console.log(generateArray(-4,7))
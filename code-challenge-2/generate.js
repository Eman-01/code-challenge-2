//function that accepts a value as input, checks if the remainder is zero and returns either true or false
function primeNumbers(val){
if(val <= 1){return false}
for(i = 2;i <= Math.sqrt(val);i ++){
    if(val % i === 0){
        return false;
    }}
     return true;   
}
//callback function that filters through the array and returns prime numbers
function filterPrimeNumbers(array){
    return array.filter(val => primeNumbers(val))
}
const numbers = [1,2,3,4,5,6,7,8,9]
console.log(filterPrimeNumbers(numbers));

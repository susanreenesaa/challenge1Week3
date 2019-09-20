var numbers =['y','u','a','c',0,4,1,12,5];
function arraySort(num) {
    var i;
    var even =[];
    var odd =[];
    var chars=[];
    var isGreaterThan = function(a, b){return a-b}
    if (Array.isArray(num)){
    for(i=0; i<num.length; i++){
        if (num[i] % 2 === 0){
            even.push(num[i])
        }
        else if(num[i] % 2 === 1){
            odd.push(num[i]);
       }
        else{
        chars.push(num[i]);
    }
    
    return object={
        'evens':even.sort(isGreaterThan),
        'odds':odd.sort(isGreaterThan),
        'chars':chars.sort() 
    }
}
    }
    else{
        return 'invalid input';
    }
}
console.log(arraySort(numbers));

module.exports = arraySort;


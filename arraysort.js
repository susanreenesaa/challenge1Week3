function arraySort(num) {
    let i;
    const even =[];
    const odd =[];
    const chars=[];
    var isGreaterThan = function(a, b){return a-b}
    if(Array.isArray(num)){
        for(i=0; i<num.length; i++){
            if(num[i]%2===0){
                even.push(num[i])
            }
            else if(num[i]%2 ===1){
                odd.push(num[i]);
        
        }
        else{
            chars.push(num[i]);
        }
        }
        
        return object={
        'evens':even.sort(isGreaterThan),
            'odds':odd.sort(isGreaterThan),
            'chars':chars.sort()
        }
}
else{
    return 'invalid input'
}
}

numbers =['x','d','p',1,0,10,5,20];
console.log(arraySort(numbers));

module.exports = arraySort;


    

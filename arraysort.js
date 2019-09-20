// var str='1ab2c3defUIoAu18x0p6o9i20k100';
// not yet sure if these should be global
    // var numbers = str.match(/\d+/g)
    // const chars = str.toLowerCase().match(/[A-z]/g).sort()

function arraySort(num) {
    var i;
    var even =[];
    var odd =[];
    var chars=[];
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


    // function evenAndOddNumbers(anArray){
       
    // }



var str='1ab2c3defUIoAu18x0p6o9i20k100';
// not yet sure if these should be global
    var numbers = str.match(/\d+/g)
    const chars = str.toLowerCase().match(/[A-z]/g).sort()

    function evenAndOddNumbers(num){
        var i;
        var even =[];
        var odd =[];
        var isGreaterThan = function(a, b){return a-b}
        for(i=0; i<num.length; i++){
            if(num[i]%2===0){
                even.push(num[i])
            }
            else if(num[i]%2 ===1){
                odd.push(num[i]);
           
        }
        }
        
    return object={
        even:even.sort(isGreaterThan),
        odd:odd.sort(isGreaterThan),
        chars:chars
    }
    }

console.log(evenAndOddNumbers(numbers));
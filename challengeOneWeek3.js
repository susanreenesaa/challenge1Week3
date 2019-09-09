
    var i;
    var str='1ab2c3defUIoAu1806';
    var even =[];
    var odd =[];
    var numbers = str.match(/\d+/g)
    const chars = str.toLowerCase().match(/[A-z]/g).sort()
    var sortedStr=[];
    for (i=0; i<str.length;i++){

    }
    // return numbers;


    function evenAndOddNumbers(num){
        for(i=0; i<num.length; i++){
            if(num[i]%2===0){
                even.push(num[i])
            }
            else if(num[i]%2 !=0){
                odd.push(num[i]);
           
        }
        }
        
    return object={
        even:even.sort(),
        odd:odd.sort(),
        chars:chars
    }
    }
console.log(evenAndOddNumbers(numbers));
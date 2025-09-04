/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   const  str = s.split(' ')
    const stack = []
    for(i= 0;i< str.length;i++){
        stack.push(str[i])
    }
   
 let result =''
while(stack.length){
    let corrent = stack.pop()
    if(corrent){

   result+=' '+corrent
    }
    }
    return result.trim()
};
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0
    let write =0
    
    while(i<chars.length){
    let j = i
    
    
    while(j<chars.length && chars[j]==chars[i]) j++

     chars[write++]= chars[i]

     const count = j-i
     if(count >1){
        for(const digit of count.toString()){
            chars[write++] = digit
        }
     }
     i = j
        }
    
    return write
};
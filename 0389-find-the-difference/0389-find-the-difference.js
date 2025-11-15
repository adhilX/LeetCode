/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
    const map = {}

    for(let i = 0 ; i < t.length; i++){
        map[t[i]] = (map[t[i]]|| 0 )+1
    }

   console.log(map)
   for (let ch of s) {
        map[ch]--;
        if (map[ch] === 0) {
            delete map[ch];
        }
};
  console.log(map)
   return Object.keys(map)[0]
}
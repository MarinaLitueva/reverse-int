module.exports = function reverse(n) {
    let num = Math.abs(n);
    let str = +String(num).split("").reverse().join(""); 
    return str     
}
   
   
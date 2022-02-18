function gcd(a,b) {
  return b==0?a:gcd(b, a%b);
}

function lcm(a,b) {
  return a*b/gcd(a,b);
}

function generateRange(a, b) {
  return a==b?[b]:[...generateRange(a,b-1),b];
}

/*
function smallestCommons(arr) {  
  const [min, max] = arr.sort((a, b)=>a-b);
  const range = generateRange(min,max);
  return range.reduce((multiple, number)=>lcm(number, multiple));
}
*/

//smallestCommons([1,5]);

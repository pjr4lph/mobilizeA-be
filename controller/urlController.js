const Url = require('./urlModel.js');

let lowLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let nums = ['0','2','3','4','5','6','7','8','9'];
let capLetters = ['Z','Y','X','W','V','U','T','S','R','Q','P','O','N','M','L','K','J','I','H','G','F','E','D','C','B','A'];
// randomly generated hash doesnt handle collisions
function changeHash() {
    const low = lowLetters[Math.floor(Math.random() * Math.floor(25))];
    const num = nums[Math.floor(Math.random() * Math.floor(9))];
    const cap = capLetters[Math.floor(Math.random() * Math.floor(25))];
    return `${low}${num}${cap}`;
}

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
// insert code

let longestWord = "";
for (const item of param) {
    if (item.length > longestWord.length) {
        longestWord = item }}
    
console.log("La palabra mas larga es:",longestWord);
    
}
    findLongestWord(avengers);


const countConsistentStrings = (allowed, words) => {

    const lengthOfWords = words.length;
    const allowedArray = allowed.split('');
    let count = 0;

    for (i = 0; i < lengthOfWords; i++) {
        const isConsistent = words[i].split('').every(w => allowedArray.includes(w));
        if (isConsistent) {
            count = count + 1;
        }
    }
    return count;

}

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
console.log(countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]));
console.log(countConsistentStrings("cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]));
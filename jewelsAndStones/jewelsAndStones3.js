
const numJewelsInStones = (jewels, stones) => {

    const jewelsArray = jewels.split('');
    const stonesArray = stones.split('');
    const lengthOfStones = stonesArray.length;
    let count = 0;

    for (i = 0; i < lengthOfStones; i++) {
        if (jewelsArray.includes(stonesArray[i])) {
            count = count + 1;
        }
    }
    return  count;

}

console.log('numJewelsInStones', numJewelsInStones("aA", "aAAbbbb"));
console.log('numJewelsInStones', numJewelsInStones("z", "ZZ"));
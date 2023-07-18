
const numJewelsInStones = (jewels, stones) => {

    const jewelsArray = jewels.split('');
    const stonesArray = stones.split('');
    const lengthOfJewels = jewelsArray.length;
    let sum = 0;
    for (i = 0; i < lengthOfJewels; i++) {
        let stoneLen = stonesArray.filter(stone => stone == jewelsArray[i]).length;
        sum = sum + stoneLen;
    }
    return sum;
}

console.log('numJewelsInStones', numJewelsInStones("aA", "aAAbbbb"));
console.log('numJewelsInStones', numJewelsInStones("z", "ZZ"));
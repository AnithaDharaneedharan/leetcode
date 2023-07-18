
const numJewelsInStones = (jewels, stones) => {

    const jewelsArray = jewels.split('');
    const stonesArray = stones.split('');
    const lengthOfStones = stonesArray.length;
    const jewelsMap = new Map();
    let count = 0;

    for (i = 0; i < lengthOfStones; i++) {
        if (jewelsArray.includes(stonesArray[i])) {
            if (jewelsMap.has(stonesArray[i])) {
                count = jewelsMap.get(stonesArray[i]) + 1;
                jewelsMap.set(stonesArray[i], count);
                count = 0;
            }
            else {
                count = count + 1;
                jewelsMap.set(stonesArray[i], count); // [[a,1], [A,1]]
                count = 0;
            }
        }
    }
    return  Array.from(jewelsMap.values()).reduce((cv, acc) => cv + acc , 0) ; 

}

console.log('numJewelsInStones', numJewelsInStones("aA", "aAAbbbb"));
console.log('numJewelsInStones', numJewelsInStones("z", "ZZ"));
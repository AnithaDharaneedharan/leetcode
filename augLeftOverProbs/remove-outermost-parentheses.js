// https://leetcode.com/problems/remove-outermost-parentheses/

const removeOuterParentheses = (inputStr) => {
    let counter = 0;
    let result = '';
    for(const letter of inputStr) {
        if(letter == '(') {
            if(counter){
                result = result.concat(letter);
            }
            counter++;
        } else {
            counter--;
            if(counter){
                result = result.concat(letter);
            }
        }

    }

    return result;

}
console.log(removeOuterParentheses('(()())(())'));


// O(N) TIME COMPLEXITY SINCE 
// O(1) SPACE COMPLEXITY ->  only result created
// refer https://leet-codes.blogspot.com/2022/09/1021-remove-outermost-parentheses-stack.html
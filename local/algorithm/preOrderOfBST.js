function preOrderOfBst(list) {
    if(list && list.length) {
        const root = list[0];
        let firstRightIndex;
        for(let i = 1; i < list.length; i++) {
            if(list[i] > root) {
                firstRightIndex = i;
                break;
            }
        }
        for(let i = firstRightIndex; i < list.length; i++) {
            if(list[i] < root) return false;
        }
        
        let leftCheckResult = true;
        if(firstRightIndex > 1) {
            leftCheckResult = preOrderOfBst(list.slice(1, firstRightIndex + 1));
        }
        
        let rightCheckResult = true;
        if(firstRightIndex < list.length) {
            rightCheckResult = preOrderOfBst(list.slice(firstRightIndex, list.length));
        }
        return leftCheckResult && rightCheckResult;
    }
}

const arr = [5, 3, 2, 1, 4, 6, 7, 8, 9];
const res = preOrderOfBst(arr);
console.log('res', res);

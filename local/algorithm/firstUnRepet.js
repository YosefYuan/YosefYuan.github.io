function findOneStr(str) {
    if(!str) return -1;

    let map = {};
    let arr = str.split('');
    arr.forEach(item => {
        let val = map[item];
        map[item] = val ? val + 1 : 1;
    });

    for(let i = 0; i < arr.length; i++) {
        if(map[arr[i]] === 1){
            return i;
        }
    }
    return -1;
}

const str = 'abcabcde';
const res = findOneStr(str);
console.log('res', res);

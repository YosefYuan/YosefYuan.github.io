function buyStock(list, fee) {
    let min = list[0],
    sum = 0;
    for(let i = 0; i < list.length; i++) {
        if(list[i] < min) {
            min = list[i];
        } else {
            let temp = list[i] - min - fee;
            if(temp > 0) {
                sum += temp;
                min = list[i] - fee;
            }
        }
    }
    return sum;
}

const prices = [1, 12, 13, 9, 15, 8, 6, 16];
const fee = 2;

const profit = buyStock(prices, fee);
console.log('profit', profit);

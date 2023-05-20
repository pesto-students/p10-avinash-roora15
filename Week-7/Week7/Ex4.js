function findMaxProfit(arr, size){
  let buy = 0; // Buy
  let sell = 1; // sell
  let maxProfit = 0;
  while (sell < size) {
    if (arr[buy] < arr[sell]) {
      let currentProfit = arr[sell] - arr[buy];

      maxProfit = Math.max(maxProfit, currentProfit);
    } else {
      buy = sell;
    }
    sell++;
  }
  console.log("Max profit is : " + maxProfit);
}

let arr = [7,1,5,3,6,4];
let size = arr.length;
findMaxProfit(arr, size);

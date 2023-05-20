function threeSum(arr, target){
    arr.sort((a, b) => a - b);
    let size = arr.length;
    let closest_sum = arr[0] + arr[1] + arr[2]; //initialize
    for (let i = 0; i < size - 2; i++) {
        let left = i + 1, right = size - 1;
        while (left < right) { 
            let sum = arr[i] + arr[left] + arr[right];
            if (sum == target) { 
                return sum;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
            if (Math.abs(sum - target) < Math.abs(closest_sum - target)) {
                closest_sum = sum;
            }
        }
    }
    console.log("Closest Sum is " + closest_sum);
};

let arr = [-1, 2, 1, -4];
let target = 1;
threeSum(arr, target);



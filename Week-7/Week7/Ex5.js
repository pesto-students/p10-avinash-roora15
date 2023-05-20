function findGivenDifference(arr, size, b) {

	let i = 0;
	let j = 1;

	while (i < size && j < size) {
		if (i != j && arr[j] - arr[i] == b) {
			return true;
		}
		else if (arr[j] - arr[i] < b)
			j++;
		else
			i++;
	}
	return false;
}

let arr = [5, 10, 3, 2, 50, 80] ;
//let arr = [-10, 20] ;
arr = arr.sort(function(a, b){return a - b});
let size = arr.length;
//let b = 30;
let b = 78;

if( findGivenDifference(arr, size, b) ){
	console.log(1);
} else {
	console.log(0);
}
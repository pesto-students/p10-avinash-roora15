function printMatrixSpiral(arr, row, col) {
	let i, k = 0, l = 0;
  let newArr = [];
	/*
		k - starting row index
		m - ending row index
		l - starting column index
		n - ending column index
		i - iterator
	*/

	while (k < row && l < col) {

		for (i = l; i < col; ++i) {
			newArr.push(arr[k][i]);
		}
		k++;

		for (i = k; i < row; ++i) {
			newArr.push(arr[i][col - 1]);
		}
		col--;

		if (k < row) {
			for (i = col - 1; i >= l; --i) {
				newArr.push(arr[row - 1][i]);
			}
			row--;
		}

		if (l < col) {
			for (i = row - 1; i >= k; --i) {
				newArr.push(arr[i][l] );
			}
			l++;
		}
	}
  console.log(newArr)
}


let arr = [ [ 1, 2, 3 ],
            [ 4, 5, 6 ],
            [ 7, 8, 9 ] ] ;
let row = arr.length;
let col = arr[0].length;

printMatrixSpiral(arr, row, col);


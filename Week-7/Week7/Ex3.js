function sortArray( arr, size)
{
	let i, countZero = 0, countOne = 0, countTwo = 0;

	for ( i = 0; i < size; i++) {
		switch (arr[i]) {
		case 0:
			countZero++;
			break;
		case 1:
			countOne++;
			break;
		case 2:
			countTwo++;
			break;
		}}
		
  //Rearrange Array
    i = 0;
    while (countZero > 0) {
      arr[i++] = 0;
      countZero--;
    }
    while (countOne > 0) {
      arr[i++] = 1;
      countOne--;
    }
    while (countTwo > 0) {
      arr[i++] = 2;
      countTwo--;
    } 

	console.log(arr)
}



let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
let size = arr.length;

sortArray(arr, size);


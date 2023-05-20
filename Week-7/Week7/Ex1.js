function maxSubArraySum(a , size) {
	var max_achieved = Number.MIN_VALUE, max_end = 0, start = 0, end = 0, s = 0;

	for (let i = 0; i < size; i++) {
		max_end += a[i];

		if (max_achieved < max_end) {
			max_achieved = max_end;
			start = s;
			end = i;
		}

		if (max_end < 0) {
			max_end = 0;
			s = i + 1;
		}
	}
	console.log("Maximum contiguous sum array is [ " + a.slice(start, end +1)  + "]");
}
	
var a = [ -2, -3, 4, -1, -2, 1, 5, -3 ];
var n = a.length;
maxSubArraySum(a, n);

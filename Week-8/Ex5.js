function nextGreaterElement(arr, n)
{
	var stack = [];

	for (var i = 0; i < arr.length; i++)
	{
		while (stack.length > 0 && stack[stack.length - 1]["value"] < arr[i])
		{
			//pop element from stack when top of the stack value is smaller in the current array element...
			var d = stack.pop();
			arr[d["index"]] = arr[i];
		}

		// ... else push element into the stack
		stack.push({"value": arr[i], "index": i});
	}
	

	//Once above operation is finished, whatever values remain will not have greater values
	//than them so we will assign them result as -1

	while (stack.length > 0)
	{
		d = stack.pop();
		arr[d["index"]] = -1;
	}
	
	return arr;
	
}

var arr = [1, 2, 3, 4];
var n = 4;

console.log(nextGreaterElement(arr, n));
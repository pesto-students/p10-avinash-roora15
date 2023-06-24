function paranthesisChecker(exp)
{
	let stack = [];

	for(let i = 0; i < exp.length; i++)
	{
		let x = exp[i];

		if (x == '(' || x == '[' || x == '{')
		{
			stack.push(x);
			continue;
		}

		// If stack becomes empty at this point, it does not contain closing brackets, return false
		if (stack.length == 0)
			return false;
			
		let check;
		switch (x){
		case ')':
			check = stack.pop();
			if (check == '{' || check == '[')
				return false;
			break;

		case '}':
			check = stack.pop();
			if (check == '(' || check == '[')
				return false;
			break;

		case ']':
			check = stack.pop();
			if (check == '(' || check == '{')
				return false;
			break;
		}
	}
	return (stack.length == 0);
}

//Uncomment for testing

//let exp = "{[()]}";

let exp = "[()";

if (paranthesisChecker(exp))
	console.log("Expression is Balanced");
else
	console.log("Expression is not Balanced");


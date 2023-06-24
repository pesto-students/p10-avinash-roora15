class Queue{
	
constructor()
{
	this.stack1 = [];
	this.stack2 = [];
}

enQueue(x)
{
	
	// Create a Queue using 2 stacks:
	// Start by moving all elements from stack1 to stack2.
	// Then add the new item to the empty stack1.
	// Then push rest of the items from stack2 back into stack1 to form a queue of ALL items.

	while (this.stack1.length != 0)
	{
		this.stack2.push(this.stack1.pop());
	}

	this.stack1.push(x);

	while (this.stack2.length != 0)
	{
		this.stack1.push(this.stack2.pop());
	}
}

// Dequeue an item from the queue which is actually stack1
deQueue()
{
	if (this.stack1.length == 0)
	{
		console.log("Queue is Empty");
	}
	let x = this.stack1[this.stack1.length - 1];
	this.stack1.pop();
	return x;
}

printFunction(){
	console.log(this.stack1)
}

}

//Driver code for the usecases

let q = new Queue();

let input = [1, 2 ,1 , 3 , 2 ,1 ,4 ,2]

for( let i=0; i<input.length; i++){
	
	if(input[i] === 1){
		q.enQueue(input[i+1]);
    q.printFunction();
		i++;
	} 
	else if(input[i] === 2){
		q.deQueue();
    q.printFunction();
	}
}

q.printFunction();



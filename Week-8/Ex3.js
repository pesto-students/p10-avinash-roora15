var head; 

class Node {
	constructor(val) {
		this.data = val;
		this.next = null;
	}
}

function checkForLoop(head) {
	var map = new Set();
	while (head != null) {

		// Return true if we encounter a node for the second time
		if (map.has(head))
			return true;

		// Else add node to map
		map.add(head);

		head = head.next;
	}

	return false;
}

head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(4);

/* Create loop at x=2 for testing */
head.next.next= head;

if (detectLoop(head))
	console.log("Loop Detected");
else
	console.log("Loop Not Detected");



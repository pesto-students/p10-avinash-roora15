var head;
class Node{
	constructor(val){
		this.data = val;
		this.next = null;
	}
}

function printList(node) {
	while (node != null) {
		console.log(node.data + " ");
		node = node.next;
	}
}

function rotateList(k)
{
	var last = head;
	var temp = head;
	
	//no rotation is required if list is empty or head is null or k==0
	if(head == null || k == 0) return head;
	
	//Establish Last Node
	while(last.next != null)
		last = last.next;
		
	//Then rotate the list k times
	while(k != 0){
		head = head.next;
		temp.next = null;
		last.next = temp;
		last = temp;
		temp = head;
		k--;
	}
}

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(7);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(9);
	
rotateList(3);
printList(head);



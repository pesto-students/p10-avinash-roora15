class Node {
constructor(value) {
	this.data = value;
	this.left = null;
	this.right = null;
}
}

function levelOrderTraversal() {

console.log("Printing Level Order Traversal below");

var queue = [];
var result = [];
result.push(root.data);
queue.push(root);
while (queue.length != 0) {
	
	var tempNode = queue.shift();

	if (tempNode.left != null && tempNode.right != null) {
		queue.push(tempNode.left);
		queue.push(tempNode.right);
		result.push([tempNode.left.data, tempNode.right.data]);
	}
	else if (tempNode.left != null) {
		queue.push(tempNode.left);
		result.push([tempNode.left.data]);
	}
	else if (tempNode.right != null) {
		queue.push(tempNode.right);
		result.push([tempNode.right.data]);
	}
	
}

console.log(result)
}

var root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.left.left = new Node(15);
root.left.right = new Node(7);
levelOrderTraversal();

let root;

class Node
{
constructor(value)
{
	this.data=value;
	this.left=this.right=null;
}
}



// Compute left depth and right depht.
// Compare them and return the larger value among them + 1(for start node) to find max depth of tree.
function maxDepthBinaryTree(node)
{
	if (node == null)
		return 0;
	else
	{
		
		let leftDepth = maxDepthBinaryTree(node.left);
		let rightDepth = maxDepthBinaryTree(node.right);

		if (leftDepth > rightDepth)
			return (leftDepth + 1);
		else
			return (rightDepth + 1);
	}
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);

console.log("Max Depth of Binary Tree is : " + maxDepthBinaryTree(root));



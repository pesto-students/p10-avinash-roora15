let prev;

class Node
{
constructor(value)
{
this.left = null;
this.right = null;
this.data = value;
}
}

function isValidBST(root)
{

// traverse tree while tracking prev node.
//If the value of the current node is lesser than value of prev node, then the tree cannot be BST.

if (root != null)
{
	if (!isValidBST(root.left))
		return false;
	if (prev != null && root.data <= prev.data)
		return false;

	prev = root;
	return isValidBST(root.right);
}
return true;
}

function isValidBSTDriver(root)
{
return isValidBST(root);
}

let root = new Node(2);
root.left = new Node(1);
root.right = new Node(3);
/* root.left.left = new Node(1);
root.left.right = new Node(4); For Invalid BST */

if (isValidBSTDriver(root))
console.log("Valid BST");
else
console.log("Invalid BST");

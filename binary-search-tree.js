class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    // Otherwise, find the correct spot for the new node.
    let current = this.root;
    while (current) {
      if (val < current.val) {
        if (current.left == null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    } else {
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root === null) return null;

    let current = this.root;
    while (current) {
      if (current.val === val) {
        return current;
      } else if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (!current) return undefined;
    if (current.val === val) return current;
    if (val < current.val) {
      return this.findRecursively(val, current.left);
    } else {
      return this.findRecursively(val, current.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let arr = [];
    let node = this.root;
    function preOrder(node) {
      arr.push(node.val);
      if (node.left) preOrder(node.left);
      if (node.right) preOrder(node.right);
      return arr;
    }
    return preOrder(node);
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let arr = [];
    let node = this.root;

    function inOrder(node) {
      if (node.left) inOrder(node.left);
      arr.push(node.val);
      if (node.right) inOrder(node.right);
      return arr;
    }
    inOrder(node);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let arr = [];
    let node = this.root;
    function postOrder(node) {
      if (node.left) postOrder(node.left);
      if (node.right) postOrder(node.right);
      arr.push(node.val);

      return arr;
    }
    postOrder(node);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let queue = [this.root];
    let arr = [];
    while (queue.length) {
      let current = queue.shift();
      arr.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return arr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced(node = this.root) {
    if (node === null) return null;

    return maxDepth(node) - minDepth(node) <= 1;

    function maxDepth(node) {
      if (node === null) return 0;

      return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
    }

    function minDepth(node) {
      if (node === null) return 0;

      return 1 + Math.min(minDepth(node.left), minDepth(node.right));
    }
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;

#Tests for Binary Search Tree
####How to use?

1. ```git clone```
2. ```npm i```
3. Export structure and BST class from index.js file

```javascript
module.exports = {
  //BST class
  BinarySearchTree,
  //root name
  root: '_root',
  //left and right nodes
  left: 'left',
  right: 'right',
  student: 'STUDENT NAME'
};
```
After that run  ```npm run test``` and enjoy :white_check_mark:

## Binary search tree
Implement data structure **"binary search tree"**. It should be done as a **stand-alone**, **clean**, **independent component**, which can be used wherever needed. B.S.T. should have the following methods (you can add your own methods, but the 7 listed below must be and named exactly as stated):
* root     (**no param**)          returns root* of the tree;
* insert   (**param:** key, value) stores specified value in tree using key; method should be chainable**;
* delete   (**param:** key)        removes node from tree by provided key; method should be chainable**;
* search   (**param:** key)        looking for stored data in tree using key;
* contains (**param:** value)      returns whether BST contains such value or not;
* traverse (**param:** order)      retrieves ordered sequence of stored values in given oreder (order is boolean)   
* verify   (**no param**)          verifies whether tree is well-formed binary search tree or not

function Node(key, value) {
    this.key = key || null;
    this.value = value || null;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this._root = new Node();
}
BinarySearchTree.prototype.root= function(){
  if (this._root === null) {
    return null;;
  }
  else{
    return this._root.value;
  }
  
}
BinarySearchTree.prototype.insert=function(key, value){
        let current;
        if (this._root.key === null) {
            this._root = new Node(key, value);
            return this;
        }
        else{
          current = this._root;
        }
        while (true){
            if (key < current.key){
                if(current.left === null){
                    current.left = new Node(key, value);
                    break;
                }else {
                    current = current.left;
                }
            } else if (key > current.key){
                if (current.right === null){
                    current.right = new Node(key, value);
                    break;
                }else {
                    current = current.right;
                }
            }
            else{
                break;
            }
        }
  return this;

}
BinarySearchTree.prototype.delete= function(key){
  var parent = null;
            current = this._root;
        while(current){
            if (key < current.key ){
                parent = current;
                current = current.left;
            } else if (key  > current.key ){
                parent = current;
                current = current.right;
            } else {

              if (current === this._root){

                    if(current.left === null && current.right === null){ 
                        this._root = null;
                    } else if(current.right === null){
                        current = current.left;
                    } else if(current.left === null){
                        current = current.right;
                    }
                    else if (current.left && current.right) {

                    }
                
              } 
            else {

                    if(current.left == null && current.right == null){
                        if (current.key  < parent.key ){
                            parent.left = null;
                        } else if(current.key  > parent.key ){
                            parent.right = null;
                        } 
                    }else if(current.right === null){
                          parent.left = (current.left === null ? current.right : current.left);
                    } else if(current.left === null){
                         parent.right = (current.left === null ? current.right : current.left);
                    } else {
                      if (current.left != null && current.right != null) {
              if (parent.left == current){
                parent.left = current.left;
              }
              else {
                parent.right = current.left;
              }
                      }
                }
            }
            current = false;
            }
        }
}

BinarySearchTree.prototype.contains= function(value){
  inOrder(this._root)
  for (var i = 0; i < mas.length; i++) {
    if (mas[i] === value) {
      return true
    }
  }
  return false

}
BinarySearchTree.prototype.search= function(key){
   var currentNode = this._root;

        while (currentNode){
            if (currentNode.key === key){
                return currentNode.value;
            }
             if(currentNode.key > key){
                currentNode = currentNode.left;
            }
             if(currentNode.key < key){
                currentNode = currentNode.right;
            }else {
                return null
            }
        }
}
var mas =[];
BinarySearchTree.prototype.traverse= function(order){
  mas = [];
  if (order === true) {
    inOrder(this._root)
    return mas;
  }
  if (order === false) {
    inOrder(this._root);
    let masrev = mas.reverse();
    return masrev; 
  }
  
}
BinarySearchTree.prototype.verify= function(){
  if (!verify(this._root)) {
    return false;
  }
  else{
    return true
  }

}
function inOrder(node){
  if (node === null) return;
  inOrder(node.left);
  mas.push(node.value);  
  inOrder(node.right);
}

function verify(node){
  if (node.left && node.left.key > node.key) {
    return false
  }
    if(node.right !== null && node.right.key < node.key) {
                return false;
            }
    else{
      return true
    }
}
module.exports = {
  BinarySearchTree,

  //WARNING!!!
  //PROVIDE BST STRUCTURE FOR TESTS {STRING}
  root: '_root',
  left: 'left',
  right: 'right',
  //NAME FOR REPORTS
  student: 'Karina Vanyuk'
};

/*
* MultiSelect v0.01
* Copyright (c) 2018 kong
* 暴露的方法
*  insert 插入节点
*  search 搜索节点(待写)
*  traverse 遍历节点
*  remove 移除节点
*  min 最小值
*  max 最大值
*  getRoot 获取根节点
*/

// ;(function(window){
  // 树构造器
  ;function Tree(){
    function Node(value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
    var root = null;

    function insertNode( node, newNode ){
      if( newNode.value > node.value ){
        // 往右找
        if( node.right == null ){
          node.right = newNode
        }else{
          insertNode( node.right, newNode )
        }

      }else{
        // 往左找
        if( node.left == null ){
          node.left = newNode
        }else{
          insertNode( node.left, newNode )
        }
      }
      
    }

    // 插入节点
    this.insert = function(value){
      var newNode = new Node(value)
      if( root == null ){
        root = newNode
      }else{
        insertNode( root, newNode )
      }
    }

    // 搜索节点
    this.search = function(value){

    }

    function traverse( node, callback ){
      // node => null 
      if(node == null ) return
      // callback(node.value) 8 2 3 9 前序遍历
      traverse( node.left, callback )
      // callback(node.value)  中序遍历
      traverse( node.right, callback )
      callback( node.value )   // 3 2 9 8 后续遍历
    }

    // 遍历节点
    this.traverse = function( callback ){
      traverse( root, callback )
    }

    // 1。树还是空的
    // 2.树不是空的了   
    function min(node){
      if(node == null) return null
      while(node && node.left){
          node = node.left
      }
      return node.value
    }

    this.min = function(){
      return min(root)
    }

    function max(node){
      if(node == null) return null
      while(node && node.right){
        node = node.right
      }
      return node.value
    }

    this.max = function(){
      return max(root)
    }

    // 找到右侧最小点
    function findMinNode(node){
      if(node == null) return null
      while(node && node.left){
          node = node.left
      }
      return node
    }

    function removeNode( node, value ){
      if( node == null ) return null
      if( value > node.value ){
        // 继续向右查找
        node.right = removeNode( node.right, value )
        return node
      }else if( value < node.value ){
        // 向左查找
        node.left = removeNode( node.left, value )
        return node
      }else {
        // value == node.value
        // 执行删除过程 
        if( node.left == null && node.right == null ){
          //叶节点条件
          node = null
          return node
        }

        // 只有一个子节点条件
        if( node.left == null && node.right ){
          return node.right
        }else if( node.right == null && node.left ){
          return node.left
        }

        // 有两个子节点的条件
        var aux = findMinNode( node.right ) //aux 查找到的最小的子节点
        node.value = aux.value
        node.right = removeNode( node.right, aux.value )
        return node
      }
    }

    // 删除节点
    this.remove = function( value ){
        root = removeNode( root, value )
    }

    this.getRoot = function(){
        return root
    }
  }
// })(window)
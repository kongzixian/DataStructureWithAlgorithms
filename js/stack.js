/*
* Stack v0.01
* Copyright (c) 2018 kong
* 暴露的方法
*  push 栈顶添加元素
*  pop 移除栈顶元素
*  peek 检查栈顶
*  isEmpty 检查栈 是否为空 
*  
*  clear 清除栈
*  size 获取栈的大小
*  items 检查items
*/

// ;(function(window){
  // 栈构造器
  ;function Stack(){
    var items = [];   //私有

    // push 栈顶添加元素
    this.push = function(element){
      items.push(element)
    }

    // pop 移除栈顶元素
    this.pop = function(){
      return items.pop()
    }

    // peek 检查栈顶
    this.peek = function(){
      return items[item.length - 1]
    }

    // 检查栈 是否为空
    this.isEmpty = function(){
      return items.length == 0
    }

    // 清除栈
    this.clear = function(){
        items = []
    }

    // 获取栈的大小
    this.size = function(){
      return items.length
    }

    // 检查items
    this.getItems = function(){
      return items
    }
  }
// })(window)
/*
* Queue v0.01
* Copyright (c) 2018 kong
* 暴露的方法
*  enqueue 入队
*  dequeue 出队
*  front 对列头
*  isEmpty 检查队列是否为空
*  clear 清除队列
*  max 最大值
*  size 获取队列的大小
*  getItems 队列
*/

// ;(function(window){
  // 队列构造器
  ;function Queue(){
    var items = [];   //私有

    // enqueue 入队
    this.enqueue = function(element){
      items.push(element)
    }

    // dequeue 出队
    this.dequeue = function(){
      return items.shift()
    }

    // front 对列头
    this.front = function(){
      return items[0]
    }

    // 检查队列 是否为空
    this.isEmpty = function(){
      return items.length == 0
    }

    // 清除队列
    this.clear = function(){
        items = []
    }

    // 获取队列的大小
    this.size = function(){
      return items.length
    }

    // 检查items
    this.getItems = function(){
      return items
    }

    // // 检查items 不关心
    // this.getItems = function(){
    //   return items
    // }
  }
// })(window)
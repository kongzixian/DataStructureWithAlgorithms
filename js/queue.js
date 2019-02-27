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

    // 检查栈 是否为空
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

    // // 检查items 不关心
    // this.getItems = function(){
    //   return items
    // }
  }
// })(window)
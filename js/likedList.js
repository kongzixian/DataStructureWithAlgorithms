// ;(function(window){
  // 链表构造器
  ;function LikedList(option){
    var option = option || {}
    // head 链头
    var head = null;  
    // 长度
    var length = 0;  

    // 辅助类 节点
    function Node(element){
      this.element = element
      this.next = null
    }

    // 链表尾添加元素
    this.append = function(element){
      var node = new Node(element)
      if( head == null ){
        head = node
      }else{
        var current = head;
        while(current.next){
          current = current.next
        }
        // while循环执行完之后 ，current已经是链表最后一项了
        current.next = node
      }
      length++  
    }

    //链表某一个位置添加元素
    this.insert = function(position, element){ 
      if( position > -1 && position < length ){
        var node = new Node(element)
        if( position == 0 ){
          var current = head;
          head = node
          node.next = current;

          // 另一种
          // node.next = head
          // head = node
        }else{
          var index = 0;
          var current = head;
          var previous = null;
          while( index < position ){
            previous = current;
            current = current.next;
            index++;
          }
          previous.next = node
          node.next = current
        }
        length++
      }
     }

    // 没有移除 ？？？ 拿出来用一下 根据索引
    this.removeAt = function(position){
      if(position > -1 && position < length){
        if( position == 0 ){
          var current = head;
          head = current.next
        }else{
          var current = head
          var previous = null;
          var index = 0;
          while( index < position ){
            previous = current
            current = current.next
            index++
          }
          // 跳出循环的时候 index == position
          previous.next = current.next
          return current
        }

        length--
      }
      return null
    }

    // 获取索引
    this.indexOf2 = function(element){
      var current = head
      var index = 0
      while( current ){
        if( current.element == element ){
          return index
        }
        index++
        current = current.next
      }
      return -1
    }

    // // 获取索引
    // this.indexOf = function(element, judgeby){
    //   var current = head
    //   var index = 0
    //   while( current ){
    //     if( judgeby ){
    //       if(judgeby(current.element, element)){

    //         return index
    //       }
    //     }else{
    //       if( current.element == element ){
    //         return index
    //       }
          
    //     }
    //     index++
    //     current = current.next
    //   }
    //   return -1
    // }
    
    // 获取索引
    this.indexOf = function(element){
      var current = head
      var index = 0
      while( current ){
        if( option.indexOfFunjudgeby ){
          if( option.indexOfFunjudgeby(current.element, element) ){
            return index
          }
        }else{
          if( current.element == element ){
            return index
          }
          
        }
        index++
        current = current.next
      }
      return -1
    }
    
    // 根据项 移除
    this.remove = function(element){
      return this.removeAt(this.indexOf(element))
    }
    
    // 检查栈 是否为空
    this.isEmpty = function(){
      return items.length == 0
    }  

    // 获取队列的大小
    this.size = function(){
      return items.length
    }

    this.getHead = function(){
        return head
    }
  }
// })(window)
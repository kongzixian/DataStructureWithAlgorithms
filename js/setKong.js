// ;(function(window){
  // 栈构造器
  ;function SetKong(){
    var items = {}

    ///has 检查元素是否存在 return boolean
    this.has = function(value){
      return items.hasOwnProperty(value)
    }

    // 添加
    this.add = function(value){
      if( !this.has(value) ){
        items[value] = value
      }else{
        return false
      }
    }

    this.remove = function(value){
      if( this.has(value) ){
        delete  items[value]
        return value
      }else{
        return false
      }
    }

    // 清空集合 
    this.clear = function(){
        items = {}
    }

    this.size = function(){
      return Object.keys(items).length
    }

    this.values = function(){
      var values = []
      for(var i in items){
        if(items.hasOwnProperty(i)){
            values.push(items[i])
        }
      }
      return values
    }

    //并集
    this.union = function(otherSet){
      var resultSet = new SetKong()
      var arr = this.values()
      for( var i = 0, len = arr.length; i < len; i++ ){
        resultSet.add(arr[i])
      } 
      var arr = otherSet.values()
      for( var i = 0, len = arr.length; i < len; i++  ){
        resultSet.add(arr[i])
      } 
      return resultSet
    }

    //交集
    this.intersection = function(otherSet){
      var resultSet = new SetKong()
      var arr = this.values()
      for( var i = 0, len = arr.length; i < len; i++ ){
        if( otherSet.has(arr[i]) ){
          resultSet.add(arr[i])
        }
      }
      return resultSet
    }

    // 差集
    this.difference = function(otherSet){
      var resultSet = new SetKong()
      var arr = this.values()
      for( var i = 0, len = arr.length; i < len; i++ ){
        if( !otherSet.has(arr[i]) ){
          resultSet.add(arr[i])
        }
      }
      return resultSet
    }
  }
// })(window)
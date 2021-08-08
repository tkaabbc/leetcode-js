/**
 * 只要知道下面这5个思路就没问题
 * 1.stackA负责存储数据，stackB负责弹出数据
 * 2.存数据的时候，往A里面存
 * 3.取数据的时候，先判断B有没有值，如果有值直接pop。
 * 4.如果B没值，就从A里面取。
 * 5.都没值，返回-1
 */

 var CQueue = function() {
  this.stackA = []
  this.stackB = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.stackA.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  // 取数据的时候，先判断B有没有值，如果有值直接pop
  if (this.stackB.length) {
    return this.stackB.pop()
  } else {
    // 如果B没值，就从A里面取
    if (this.stackA.length) {
      while (this.stackA.length) {
        this.stackB.push(this.stackA.pop())
      }
      return this.stackB.pop()
    } else {
      // 都没值，返回-1
      return -1
    }
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
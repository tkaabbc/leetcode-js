class Pattern {
  constructor(props) {
    super(props);
    this.matched = false
    this.pattern = false // 正则表达式
    this.plen = false // 正则表达式长度
  }
  
  match(text, tlen) {
    this.matched = false
    rmatch(0, 0, text, tlen)
    return this.matched
  }

  rmatch(ti, pj, text, tlen) {


    if (this.pattern[pj] == '*') { // 匹配任意个
      for (let k = 0; k <= tlen - ti; k++) {// k 越来越大
        rmatch(ti + k, pj + 1, text, tlen)
      }
    } else if (this.pattern[pj] == '?') { // 匹配0个或1个
      
    } else if (ti < tlen && this.pattern[pj] === text[ti]) {// 存字符匹配
      rmatch(ti + 1, pj + 1, text, tlen)
    }
  }
}

/**
 * ‘*’改造后约定为匹配任意个前面出现的字符（而不是表达式）
 * ‘？’匹配0或1个前面的字符（是字符不是表达式）
 * 
 * 问题：通配符不是匹配前面一个吗？为什么传的是pj + 1而不是pj-1？
 * todo：看 leetcode上的题目是怎么定义规则的
 */
// function circleStr(s) {
//   let restJump = 1
//   let ans = false
//   let len = s.length
//   let mid = Math.floor((len - 1) / 2)
//   // 0 1 2 3
  
//   let spread = (i, j, restJump) => {
//     console.log(i, j);
//     while (i >= 0 && j <= len - 1) {
//       console.log(i,s[i], j, s[j], restJump);
//       if (s[i] === s[j]) {
//         if (i === 0 && j === len - 1) {
//           ans = true
//           break
//         } else {
//           i--
//           j++
//         }
//       } else {
//         if (restJump) {
//           spread(--i, j, restJump - 1)
//           spread(i, ++j, restJump - 1)
//         } else {
//           break
//         }
//       }
//     }
//   }

//   if (len % 2) {
//     // 奇数
//     spread(mid, mid, restJump)
//   } else {
//     // 偶数
//     spread(mid, mid + 1, restJump)
//   }
//   return ans
// }
// "deeee" 情况有点特殊
// 貌似不能用中心扩散+跳过
// 得用两边往中间+跳过
/**
 * todo
 * 中心往两边扩散行不通，因为删除之后长度的奇偶数就变了
 */
 function circleStr(s) {
  let ans = false
  let len = s.length
  
  let spread = (left, right, restJump, type) => {
    while (left <= right) {
      console.log(left, right, type, restJump);
      console.log(s[left], s[right]);
      if (s[left] === s[right]) {
        if (left === right || right - left === 1) {
          ans = true
          break
        }
        left += 1
        right -= 1
      } else {
        if (restJump) {
          // spread(left + 1, right, 0, '++left')          
          spread(left, right - 1, 0, '--right') 
          console.log('restJump');         
        } else {
          break
        }
      }
    }
  }
  spread(0, len - 1, 1, '')
  return ans
}
console.log(circleStr("deesaee"));

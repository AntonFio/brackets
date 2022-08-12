module.exports = function check(str, bracketsConfig) {
   const open = ['(', '{', '[', '|'];
   const end = {
     [')']: '(',
      ['}']: '{',
      [']']: '[',
      ['|']: '|',
   };

   function isBracketsOk(strAll) {
      let stack = [];
  
      for (let i = 0; i < strAll.length; i++) {
        let item = strAll[i];
        
        if (open.includes(item)) {
          stack.push(item);
        } else {
          if (stack.length === 0) {
            return false;
          }
  
          let topElement = stack[stack.length - 1];
  
          if (end[item] === topElement) {
            stack.pop();
          } else {
            return false;
          }
        }
      }
  
      return stack.length === 0;
   }
   return isBracketsOk(str)
}



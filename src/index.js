module.exports = function check(str, bracketsConfig) {
   const arrOpen = ['(', '[', '{', '||'];
   const close = {
      [')']: '(',
      [']']: '[',
      ['}']: '{',
      ['|']: '|',
   }

let arr = [];

for (let i = 0; i < str.length; i++){
   let strItem = str[i];
   if (arrOpen.includes(strItem)) {
      arr.push(strItem)
   }
   let topElement = arr[arr.length - 1];
   if (close[strItem] === topElement) {
      arr.pop()
   } 
   return arr.length === 0;
}

}



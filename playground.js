const regexOne = /reg/i
const regexTwo = new RegExp('101', 'g')

const str = '101regex101'

console.log(str.match(regexOne)) // ['reg']
console.log(str.match(regexTwo)) // ['101', '101']
console.log(str.replace(/r/, 'R')) // Regex101
console.log(/r/.test(str)) // true

console.log(str.match(/reg/)) // ['reg']
console.log(str.match(/[arzy]/)) // ['r']
console.log(str.match(/[f-h]/)) // ['g']
console.log(str.match(/[1-3]/)) // ['1']
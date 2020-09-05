// 1、需求：计算字符串最后一个单词的长度，单词以空格隔开。 
// 输入描述：一行字符串，非空，长度小于5000。q输出描述: 整数N，最后一个单词的长度。
function wordLength(str) {
  let targetArr = str.split(' ')
  return targetArr[targetArr.length - 1].length
}
console.log(wordLength('as'))
console.log(wordLength('asdf asdfasd asdfasd asdf asdfqw312asdfasdfq3wildfsjd asdfasdfajsdlfm asdfsdjh asdf asdfasdf'))
console.log(wordLength('asdf asdfasdf asddasdadfasdf p'))
console.log(wordLength('asdf asdfasdf asdfasdfasdfasdfklqweljfyhuiq3ipjhasjklfjkashdkfjasd asdfashdfkhkahsdkfmasdfasd'))

// 2、写出一个程序，接受一个由字母和数字组成的字符串，和一个字符，然后输出输入字符串中含有该字符的个数。不区分大小写。

function findChart(str, chart) {
  let sum = 0
  str.split('').forEach(i => {
    if (i === chart) {
      sum++
    }
  })
  return sum
}
console.log(findChart('asdqw3rd;ljkasdfjkasdfasd', 'a'))
console.log(findChart('asdqwrrtsdgsd', 'c'))
console.log(findChart('asdqqwerw3rdsdfassdfjkasdfasd', 'e'))
console.log(findChart('asdqw3rd;ljkasdfjkasdfasd', 'f'))

// 3、明明想在学校中请一些同学一起做一项问卷调查，为了实验的客观性，他先用计算机生成了N个1到1000之间的随机整数（N≤1000），
// 对于其中重复的数字，只保留一个，把其余相同的数去掉，不同的数对应着不同的学生的学号。
// 然后再把这些数从小到大排序，按照排好的顺序去找同学做调查。
// 请你协助明明完成“去重”与“排序”的工作(同一个测试用例里可能会有多组数据，希望大家能正确处理)。

function sort(arr) {
  return [...new Set(arr)].sort((p, n) => (n - p), 0)
}
console.log(sort([1, 3, 34, 56, 345, 34, 14, 2, 56, 3, 3, 44, 33, 7, 56, 3, 4, 345, 5, 6, 34, 23, 65, 7, 4, 556]))
console.log(sort([231, 3, 4, 56, 76, 78, 79, 9, 34, 14, 2, 56, 3, 3, 44, 33, 67, 56, 3, 4, 343, 4, 5, 34, 23, 2346, 3456, 32, 46]))
console.log(sort([3, 4, 65, 76, 6, 234, 4, 3, 456, 5, 34, 4, 3, 4, 0, 9, 45, 6, 45, 6, 56, 254, 35, 6, 4, 7, 4, 556]))

// 4、需求：连续输入字符串，请按长度为8拆分每个字符串后输出到新的字符串数组；长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。
function strToArr(str) {
  if (!str) return str
  let arr = []
  let count = Math.ceil(str.length / 8)
  for (let i = 0; i < count; i++) {
    if (count === i + 1) {
      arr.push(str.slice(i * 8, i * 8 + 8) + '0'.repeat((count % 8)))
    } else {
      arr.push(str.slice(i * 8, i * 8 + 8))
    }

  }
  return arr
}
console.log(strToArr('asdlkjlajhnlqbjldhajlsdfjasdfhjlaksdbflkajsdqwej;rtmsdfsmdjlfaf;lsdnkasdmfasdfk;asdfjgmsdmf'))
console.log(strToArr('afghjdsfgewrtjhydfawerwertretuicfgsrftgwer'))
console.log(strToArr(''))
console.log(strToArr('awertuytfgasdfjmtyuteartdgfkkasdfsadfnaksdnferter'))

// 5、需求：写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。（多组同时输入 ）
function numberToTransform(num) {
  return parseInt(num, 16)
}
// 6、需求：功能:输入一个正整数，按照从小到大的顺序输出它的所有质因子（如180的质因子为2 2 3 3 5 ），最后一个数后面也要有空格

// 7、需求：写出一个程序，接受一个正浮点数值，输出该数值的近似整数值。如果小数点后数值大于等于5,向上取整；小于5，则向下取整。
function num(num) {
  return Math.ceil(num - 0.5)
}
console.log(num(1.2645645))
console.log(num(1.5645645))
console.log(num(0.5645645))
console.log(num(0.1645645))
// 8、需求：输入一个int型整数，按照从右向左的阅读顺序，返回一个不含重复数字的新的整数。
// 9、需求：编写一个函数，计算字符串中含有的不同字符的个数。字符在ACSII码范围内(0~127)，换行表示结束符，不算在字符里。不在范围内的不作统计。
// 10、需求：输入一个整数，将这个整数以字符串的形式逆序输出程序不考虑负数的情况，若数字含有0，则逆序形式也含有0，如输入为100，则输出为001
function reverseNum(numStr) {
  return numStr.split('').reverse().join('')
}
console.log(reverseNum('12323455467568546'))
console.log(reverseNum('123234000000000'))
// 11、需求：写出一个程序，接受一个字符串，然后输出该字符串反转后的字符串。（字符串长度不超过1000）
function reverseStr(str) {
  return str.split('').reverse().join('')
}
console.log(reverseStr('qwersdfguererwe'))
console.log(reverseStr('qw3rqwerqasdfawerfdsgfsddgsdf'))
// 12、需求：将一个英文语句以单词为单位逆序排放。例如“I am a boy”，逆序排放后为“boy a am I”所有单词之间用一个空格隔开，语句中除了英文字母外，不再包含其他字符
function reverseWord(word) {
  return word.split(' ').reverse().join(' ')
}
console.log(reverseWord('qwe rsd fguer erwe'))
console.log(reverseWord('qw3r qwerqas dfawe rfdsgf sddgsdf'))
// 13、需求：给定n个字符串，请对n个字符串按照字典序排列。
// 14、需求：输入一个int型的正整数，计算出该int型数据在内存中存储时1的个数。
// 15、需求：购物单
// 16、 需求： 开发一个坐标计算工具， A表示向左移动， D表示向右移动， W表示向上移动， S表示向下移动。 从（ 0, 0） 点开始移动， 从输入字符串里面读取一些坐标， 并将最终输入结果输出到输出文件里面。
// 17、需求：识别有效的IP地址和掩码并进行分类统计，请解析IP地址和对应的掩码，进行分类识别。要求按照A/B/C/D/E类地址归类，不合法的地址和掩码单独归类。
// 18、需求：简单错误记录，开发一个简单错误记录功能小模块，能够记录出错的代码所在的文件名称和行号。
// 19、需求：密码验证合格程序
// 20、需求：简单密码

// 最大公约数
let line = 'Aa12('
let code = 0,
  haveLetter = 0,
  haveNumber = 0,
  havaSymbol = 0,
  res = ''
if (line.length <= 4) {
  code += 5
} else if (line.length >= 5 && line.length <= 7) {
  code += 10
} else if (line.length >= 8) {
  code += 25
}
console.log(res, code)
if (/[A-Z]/g.test(line)) {
  haveLetter++
  code += 10
}
if (/[a-z]/g.test(line)) {
  haveLetter++
  code += 10
}
console.log(res, code)
if (/[0-9]/g.test(line)) {
  haveNumber = 1
  if (/[0-9]+/g.test(line)) {
    code += 20
  } else {
    code += 10
  }
}
console.log(res, code)
if (/[!"#$%&'()*+,-./x3A0x40x5B0x60x7B0x7E]/g.test(line)) {
  havaSymbol = 1
  if (/[!"#$%&'()*+,-./x3A0x40x5B0x60x7B0x7E]+/g.test(line)) {
    code += 25
  } else {
    code += 10
  }
}
console.log(res, code)
if (haveLetter === 2 && haveNumber && havaSymbol) {
  code += 5
} else if (haveLetter && haveNumber && havaSymbol) {
  code += 3
} else if (haveLetter && haveNumber) {
  code += 2
}
if (code >= 90) {
  res = 'VERY_SECURE'
} else if (code >= 80) {
  res = 'SECURE'
} else if (code >= 70) {
  res = 'VERY_STRONG'
} else if (code >= 60) {
  res = 'STRONG'
} else if (code >= 50) {
  res = 'AVERAGE'
} else if (code >= 25) {
  res = 'WEAK'
} else if (code >= 0) {
  res = 'VERY_WEAK'
}
console.log(res, code)
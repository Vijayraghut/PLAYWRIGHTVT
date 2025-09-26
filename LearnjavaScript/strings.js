
// var stu1 = "Vijay"
// var stu2 = "Ranga"

// // friends = "Vijay and Ranga are best friends"    // instead of this

// friends = `${stu1} and ${stu2} are best friends`

// console.log(friends)




arr = ["Sheena", "Yamuna"]
var stu1 = "Raju"

var stu2 = "Pradeep"

sentence = `${arr[0]} and ${arr[1]} are Best friends`

console.log(sentence)


str = "Raju"

console.log(typeof(str))

str = 'raju'

console.log(typeof(str))
str = `raju`
console.log(typeof(str))

str1 = `Raju's Place is "Bangalore"`

str2 = "Javascript"

console.log(str2.length)

console.log(str2[3])

console.log(str2.charAt(3))

str3 = str2.substr(0,4)

console.log(str3)

str4 = "     This is JS class    "

str5 = str4.toUpperCase()

console.log(str5)

str6 = str4.toLowerCase()

console.log(str6)


console.log(str4)

st7 = str4.trim()


console.log(st7)

str7 = "   Raju    ".trim()

// trimStart()
// trimEnd()

console.log(str7.length)


x = "3"+5+6+"6"+7

console.log(typeof(x)) //1467    // 31167 // 35667
//27 

//1467

console.log(6+undefined) //NaN


str8 =  "This is JS class"

console.log(str8.substr(2,5))

// arr2 = str8.split(" ")

// console.log(arr2[0])

// for(let i=0; i<str8.length; i++){

//     console.log(str8[i])
// }


st1 = "Haritha"

st2 = st1.substr(4, 3)
console.log(st2)

console.log(st1.includes("tha") ) //false


str = Number("46")

console.log(str)

price1 = Number("120")

price2 = Number("60")

totalprice = Number("180")

// price1+price2 == totalprice   // 

// 180 === 180

p1 = Number("₹151".replace("₹", "")) // 151

p2 = Number("₹300".replace("₹", ""))

// p3 = p1.replace("₹", "")

// console.log(p3)

console.log(p1+p2)

str9 = "Javascript".replaceAll("a", "K").replaceAll("J", "K")

console.log(str9)

str = Number("10.8")

//num = parseInt(str)

// num2 = parseFloat(str)

// console.log(num)

// console.log(num2)

console.log(str)
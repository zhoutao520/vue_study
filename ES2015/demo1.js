//  扩展运算符 ...
//  function terry(...arg){
//     console.log(arg[0])
//     console.log(arg[1])
//     console.log(arg[2])
// }

// terry(1,2,3)

// function terry(first,...arg){
//     // console.log(arg.length)
//     for (let val of arg) {
//         console.log(val)
//     }
// }
// terry(0,1,2,3,4,5,6,7);

// 二进制声明
// let  binary = 0B010101;
// console.log(binary)
// 八进制声明
// let octal = 0o666;
// console.log(octal)
// isFinite是数字
// isNaN是错误数字
// isInteger是整型
// let a = 11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite('asd'));
// console.log(Number.isFinite(NaN));
// console.log(Number.isNaN(NaN));
// console.log(Number.isInteger(a));

// json数组格式
// let json = {
//     '0' : 'terry',
//     '1' : 'terry1',
//     '2' : 'terry2',
//     length:3
// }

// let arr = Array.from(json);
// console.log(arr)

// Array.of方法
// 3,4,5,6
// let arr = Array.of(3,4,5,6);
// console.log(arr)

// find() 实例方法，寻找条件
// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.find((val,index,arr) =>{
//     return val > 5;
// }))

// fill
// let arr = ['terry','zhoutao','周焘'];
// arr.fill('web',1,1)
// console.log(arr)

// for of 
// let arr=['terry','zhoutao','周焘']
// for (let [index,val] of arr.entries()){
//     console.log(index+':'+val);
// }

// entries
// let arr = ['terry','zhoutao','周焘'];
// let list = ar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                r.entries();
// console.log(list.next())
// console.log(list.next().value)
// console.log(list.next().value)

// Symbol
// let f = Symbol('asdas');
// console.log( f)

// let json ={
//     name:'Terry',
//     skill:'web'
// }
// let map = new Map();
// map.set(json,'iam');
// map.set('terry',json)
// console.log(map)

// // map 增删查

// console.log(map.get('terry'));
// // map.delete(json)
// // map.clear();
// console.log(map.size)
// console.log(map.has('terry'))

var pro = new Proxy({
    add: function (val) {
        return val + 10;
    },
    name: 'I am Terry'
}, {
        get:function(target,key){
            console.log(target);
            return target[key];
        },
        set:function(target,key,value,receiver){
            console.log(`    setting ${key} = ${value}  ${receiver}`);
            return target[key] = value;
        }
 
    });
 
console.log(pro.name);
pro.name='周焘';
console.log(pro.name);
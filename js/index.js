// 1. N natural son berilgan. N gacha bo'lgan 3 ga bo'linadigan lekin 5 ga bo'linmedigan sonlarni chiqaruvchi programma tuzilsin.

// let n = +prompt(`N sonini Kiriting!`);
// let sum = 0;


// for(let i = 1; i <= n; i++ ){
//    if(i % 3 === 0 && i % 5 !== 0){
//       console.log(i);
//       sum += 1;
//    }
// }

// console.log(`3 ga Bo'linadigan Sonlar ${sum} ta`);

// 2. N natural son berilgan. Shu son mukammal yoki mukammal emasligini aniqlovchi programma tuzilsin. O'zidan boshqa bo'luvchilari yig'indisi o'ziga teng bo'lgan son mukammal son deyiladi. Masalan: 6=1+2+3 mukammal son


// let a = +prompt(`Son kiriting!`);
// let sum = 0;

// for(let i = 1; i < a; i++){
//    if(a % i === 0){
//       sum += i;
//    }
// }
// if(sum === a){
//    console.log(`${a} Soni mukammal Sondir! aaaufff`);
// } else {
//    console.log( "Aldama bu son Mukammal emas!");
// }


// 3. Ixtiyoriy sonning 3-darajasini hisoblovchi PowerA3 nomli funksiya hosil qiling.

// let s = +prompt(`Ixtiyoriy son kiriting!`);
// let b = 3;
// function myFunction(s,b) {
//    return s ** b;
// }
// console.log(myFunction(s,b));


// 4. 1-999 gacha oraliqda son berilgan. Berilgan sonni "bir", "ikki", "uch" xonali ekanligini aniqlovchi programma tuzilsin.


// let a = prompt(`1 dan 999 gacha bolgan Son kiriting!`);
// let q = 1;
// let w = 2;
// let e = 3;
// if(a.length < 4){

//    if(a.length === q){
//       console.log(`${a} soni Bir xonali Son.`);
//    }

//    if(a.length === w){
//       console.log(`${a} soni IKki xonali Son.`);
//    }

//    if(a.length === e){
//       console.log(`${a} soni Uch xonali Son.`);
//    }
// } else if(a.length > 3){
//    console.log("Bunday son Kirita olmaysiz oka");
// }


// 5. Berilgan satrni teskari chiqaruvchi funksiya tuzing.


// const string = prompt('Enter a string: ');

// function reverseString(str) {

//    let newString = "";
//    for (let i = str.length - 1; i >= 0; i--) {
//        newString += str[i];
//    }
//    return newString;
// }

// const result = reverseString(string);
// console.log(result);
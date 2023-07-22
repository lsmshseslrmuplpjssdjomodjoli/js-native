// const myProfile = {
//   name: "ぴよ",
//   age: 13
//};

// const mesg = `名前「${myProfile.name}」年齢「${myProfile.age}」`;
// console.log(mesg);

// const { name, age } = myProfile;
// const mesg = `名前「${name}」年齢「${age}」`;
// console.log(mesg);

// const sayHello = (name = "ふが") => {
//   console.log(`こんにちは「${name}」さん`);
// };

// console.log(sayHello());

// // スプレッド構文「...」(3個のドット)
// const arr1 = [1, 2];
// const sumFunc = (n1, n2) => console.log(n1 + n2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1); // 上記と同じ. Python の *arr1 と同じである✅

// const arr2 = [1, 2, 3, 4, 5];
// const [n1, n2, ...arr3] = arr2;

// console.log(n1);
// console.log(n2);
// console.log(arr3);

// 🟢03　スプレッド構文「...」(3個のドット)
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4]; // arr6 は [10, 20] である。ただし shallow copy であるが、プリミティブ型なので deep copy となる。
// const arr7 = [...arr4, ...arr5]; // arr7 は [10, 20, 30, 40] である。ただし shallow copy である。プリミティブ型なので deep copy となる。
// console.log(`arr6 => ${arr6}`);
// console.log(`arr7 => ${arr7}`);

// 🟣01　map
// 従来の記法
// const nameArr = ["田中", "山田", "鈴木"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
//}

// ES6 の記法
//const nameArr = ["田中", "山田", "鈴木"];
// (1) まずは空っぽのアロー関数を書く
// const nameArr2 = nameArr.map( ( ) => { } )
//
// (2)  配列 nameArr2 の要素を name として1個ずつ受け取る
// const nameArr2 = nameArr.map( ( name) => { } )
//
// (3) 要素を1回ずつ返却する
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2); //  ["田中", "山田", "鈴木"] という結果になる

//✅ python だと、次のような表現になる
// nameArr2 = [ name for name in nameArr ]

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  console.log(num);
});

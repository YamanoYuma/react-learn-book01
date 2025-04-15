const nameArr = ["山野","原田","竹村"];
// map
nameArr.map((name) => {
  console.log(name);
});

// filter
const newname = nameArr.filter((name) => {
  return name === "山野";
});
console.log(newname);

nameArr.map((name,index) => {
  console.log(`${name}は${index + 1}番目です`);
});

const callTakemurasan = nameArr.map((name) => {
  if(name === "竹村") {
    return `${name}さん`;
  } else {
    return `${name}`;
  }
})

console.log(callTakemurasan);

// 三項演算子
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

const printFormattedNum = (num) => {
  const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力して下さい";
  console.log(formattedNum);
}
printFormattedNum(200);
printFormattedNum("200");


const divEl = document.createElement("div");
const pEl = document.createElement("p");
const h2El = document.createElement("h2");

divEl.appendChild(h2El);
divEl.appendChild(pEl);

console.log(divEl);

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

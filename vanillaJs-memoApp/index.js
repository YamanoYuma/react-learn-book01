
// onclickAdd 
const onClickAdd = () => {
  const textEl = document.getElementById("add-text");
  const text = textEl.value;
  
  // inputを空に
  textEl.value = "";

  const li = document.createElement("li");
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = text;


  const button = document.getElementById("button");
  button.textContent = "削除";

  button.addEventListener("click", () => {
    const deleteTarget = button.closest("li");
    
  })
  //デバック用
  console.log(text);
}
document.getElementById("add-button").addEventListener('click',() => {
  onClickAdd();
})
//テキストボックスエレメント取得
//テキストボックス値取得

// テキストボックス初期化
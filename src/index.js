import "./styles.css";

const onClickAdd = () => {
  // (「追加」--02) テキストボックス(id="add-text")から、入力された値を取り出す
  const inputText = document.getElementById("add-text").value;
  // (「追加」--03) 「追加」ボタンを押下したら、テキストボックスの内容は消去する
  document.getElementById("add-text").value = "";
  // (「追加」--04) li生成
  const li = document.createElement("li");
  li.className = "list-row";
  // (「追加」--05) span生成
  const span = document.createElement("span");
  span.innerText = inputText;
  // console.log(span); // デバッグ
  // alert(inputText);
  // (「追加」--06) li > span と連結する
  li.appendChild(span);
  console.log(li);
  // (「追加」--07) 「未完了のTODO」に追加する ... <ul> 直下に登録する
  document.getElementById("incomplete-list").appendChild(li);
};

// (「追加」--01) 「追加」ボタンが押されたら、onClickAdd 関数を呼び出す
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

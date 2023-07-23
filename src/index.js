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
  // (「追加」--07) 「未完了のTODO」に追加する ... <ul> 直下に (<li>として) 登録する
  document.getElementById("incomplete-list").appendChild(li);
  // (「追加」--08) 「完了」「削除」ボタンも生成する
  const buttonComplete = document.createElement("button");
  buttonComplete.innerText = "完了";
  const buttonDelete = document.createElement("button");
  buttonDelete.innerText = "削除";

  // (「削除」--01) 「削除」ボタンが押されたら「未完了のTODO」から削除する
  // GPT-4🌀曰く『関数外から「削除」ボタンを識別することはできないので、ボタン作成時にイベントを関連付けること』
  buttonDelete.addEventListener("click", (event) => {
    // (「削除」--02) 削除対象の要素を取得する
    // GPT-4🌀に聞いてみた↓
    // ただし、このコードでも問題がある。イベントハンドラがクリックされた要素（つまり「削除」ボタン自体）を this として参照するので、
    // クリックされた「削除」ボタンの親要素を取得するためには、this を使用すべきです：
    const deleteTarget = event.target.parentNode;
    // (「削除」--03) 「<ul id="incomplete-list">」の中から該当する要素を削除する
    document.getElementById("incomplete-list").removeChild(li);
  });
  // (「追加」--09) 「完了」「削除」ボタンを <ul> 直下に (<li>として) 登録する
  li.appendChild(buttonComplete);
  li.appendChild(buttonDelete);
};

// (「追加」--01) 「追加」ボタンが押されたら、onClickAdd 関数を呼び出す
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

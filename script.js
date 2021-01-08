var list = [
  { name: "コンビニ", fast: true },
  { name: "和飲", fast: true },
  { name: "インドとタイの料理", fast: false },
  { name: "大戸屋", fast: false },
  { name: "ロイヤルインディアンダイニング", fast: false },
  { name: "和幸 泉ガーデンタワー六本木一丁目店", fast: false },
  { name: "遠いところ（安い）", fast: false },
  { name: "ビーフン", fast: false },
  { name: "お好み焼き", fast: false },
  { name: "Spain Food", fast: false },
  { name: "笑壷", fast: false },
  { name: "ザ・グリルリパブリック シカゴピザ", fast: false },
  { name: "韓国料理", fast: false },
  { name: "丸亀製麺", fast: true },
  { name: "格之進", fast: false },
  { name: "京都勝牛", fast: false },
  { name: "龍記", fast: true },
  { name: "健民ダイニング", fast: false },
  { name: "健康中華", fast: false },
  { name: "竹やん", fast: false },
];

var fastlist = [
  { name: "コンビニ", fast: true },
  { name: "和飲", fast: true },
  { name: "龍記", fast: true },
  { name: "丸亀製麺", fast: true },
];

document.getElementById("button").onclick = function () {
  var fastcheck = document.getElementById("fast");
  if (fast.checked) {
    rand = Math.floor(Math.random() * 4);
    var result = fastlist[rand].name;
    alert(result);
  } else {
    rand = Math.floor(Math.random() * 19);
    var result = list[rand].name;
    alert(result);
  }
};

// コンビニ ☑️  Fast
// - 竹ちゃん
// - 和飲 ☑️  Fast
// - インドとタイの料理
// - 大戸屋
// - ロイヤルインディアンダイニング | 泉ガーデン
// - 和幸 泉ガーデンタワー六本木一丁目店
// - 遠いところ（安い）
// - ビーフン
// - お好み焼き | 泉ガーデン
// - Spain Food | 泉ガーデン
// - 笑壷
// - [ザ・グリルリパブリック シカゴピザ](https://tabelog.com/tokyo/A1307/A130701/13224165/) | 泉ガーデン
// - [韓国料理 六本木ティーキューブ店](https://tabelog.com/tokyo/A1307/A130701/13144228/)
// - [丸亀製麺 六本木ティーキューブ店](https://tabelog.com/tokyo/A1307/A130701/13144228/)  ☑️  Fast
// - [格之進 Nikutell](https://izumigarden.jp/shop/rgt_1-c.html)
// - [京都勝牛 六本木グランドタワー店](https://izumigarden.jp/shop/rgt_2-a.html)
// - [龍記 六本木店](https://izumigarden.jp/shop/rgt_2-b.html) ☑️  Fast
// - [健民ダイニング 六本木店](https://izumigarden.jp/shop/rgt_2-i.html)
// - [健康中華 青蓮 六本木一丁目店](https://izumigarden.jp/shop/3-b.html)

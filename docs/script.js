'use strict'
const qs = (q) => document.querySelector(q) // 
const qsAll = (q) => document.querySelectorAll(q)
window.addEventListener("load", function(){
  // 白紙にするボタン
  qs('#clear-button').addEventListener("click", () =>{
    qs('#input-text').value = "" // 回答エリアを空にして
	selectedKanjiIds = [] // 選択状態も白紙に
  })
}, false)
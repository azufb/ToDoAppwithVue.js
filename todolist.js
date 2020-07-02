/*
処理の流れ

ユーザーがinputフォームに入力する。
↓
ユーザーが追加ボタンをクリック。
↓
入力欄下に上から順番に表示。
↓
削除ボタンをクリックすると、削除される。
↓
完了したタスクをドラッグし、
完了したエリアに追加することができる。
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js"></script>
*/

let app = new Vue({
    el: '#app', // Vueを適用するid名
    data: {
        newItem: '' ,
        items: [{title: 'パンを買う'}],// 入力値を格納する配列を用意する
    },
    methods: {
        addTodo: function() {
            this.items.push({
                title: this.newItem
            });
            this.newItem = '';
        },
        deleteTodo: function(item) {
            let index = this.items.indexOf(item);
            this.items.splice(index, 1); // 
        },
    }
})

let group1 = document.getElementById("dragText");
let group2 = document.getElementById("finish");

group1.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text/html", event.target.outerHTML);
    event.stopPropagation();
}, false);

group2.addEventListener("drop", function(event) {
    let dropData = event.dataTransfer.getData("text/html");

    group2.innerHTML = dropData;

    event.preventDefault();
}, false);

group2.addEventListener("dragenter", function(event){
    event.preventDefault();
  },false);
  
  group2.addEventListener("dragover", function(event){
    event.preventDefault();
  },false);
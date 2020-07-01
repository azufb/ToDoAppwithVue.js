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
*/

let app = new Vue({
    el: '#app', // Vueを適用するid名
    data: {
        newItem: '' ,
        items: []// 入力値を格納する配列を用意する
                // 入力した文字のデータを反映。html上では、v-model=で関連付けされている。
    },
    methods: {
        addTodo: function() {
            this.items.push({
                title: this.newItem
            });
            this.newItem = '';
        },
        deleteTodo: function(index) {
            this.items.splice(index, 1); // index番目から1つ要素を削除する
        }
    }
})
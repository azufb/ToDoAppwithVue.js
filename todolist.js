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
        deleteTodo: function(item) {
            let index = this.items.indexOf(item);
            this.items.splice(index, 1); // 
        }
    }
})
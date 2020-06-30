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
        newItem: '', // 入力した文字のデータを反映。html上では、v-model=で関連付けされている。
        todos: [] // 入力値を格納する配列を用意する
    },
    methods: { // methodsはオブジェクトを値にとることができる。
        addItem: function(event) { // html上では、v-on:click=で関連付けされている。
            let todo = {
                item: this.newItem  // todoと言うオブジェクトがもつitemとは、入力されたnewItemである。
            };
            this.todos.push(todo); // 配列todosにtodoを末尾から追加
        }
    }
})
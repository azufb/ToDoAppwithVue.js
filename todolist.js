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

<div　id="app">
            <form>
                <input type="text" placeholder="タスクを入力して下さい。" v-model="newItem">
                <button type="button" v-on:click="add">追加</button>
            </form>
            <div>
                <h4>ToDo</h4>
                <ul>
                    <li v-for = "item in items">
                        <label></label>
                        <button>削除</button>
                    </li>　
                    <!--オブジェクトtodoのitemプロパティをリストに表示させる。-->
                </ul>
            </div>
        </div>
 */

let app = new Vue({
    el: '#app', // Vueを適用するid名
    data: {
        items: [
           { title: '製作にチャレンジ', id: 1},
           { title: 'a', id: 2}
        ]// 入力値を格納する配列を用意する
        // 入力した文字のデータを反映。html上では、v-model=で関連付けされている。
    },
})
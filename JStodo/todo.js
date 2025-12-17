
let todoList = [];

while (true) {
    let command = prompt("コマンドを入力してください(new, list, delete, quit):");

    if (command === "new") {
        let newTodo = prompt("新しいToDoを入力してください:");
        console.log(`「${newTodo}」を追加しました`);
        todoList.push(newTodo);

    } else if (command === "list") { //Todo一覧を見る。
        console.log("*****************");
        for (let i=0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`)
        }
        console.log("*****************");

    } else if (command === "delete") {
        let deleteNum = prompt("削除するインデックスを入力してください:");
        if (!Number.isNaN(deleteNum)) {
            console.log(`${todoList[deleteNum]}を削除しました`)
            todoList.splice(deleteNum, 1)
        }else {
            console.log("有効なnumberを入力してください");
        }
        

    } else if (command === "quit" || command === "q") {
        console.log("アプリを終了しました")
        break;

    }
}
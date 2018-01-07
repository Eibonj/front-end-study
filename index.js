(function () {
    var todoInput = $("#input-box input");
    var todoList = $("#todo-list");
    var todoTemplate = '<div class="todo-item"><input type="checkbox"><div class="todo-content">{content}</div><img class="delete" src="叉.png" alt="叉" width="16" height="16"></div>'

    todoInput.keyup(function (event) {
        if (event.which === 13 || event.which === 108) {
            var content = todoInput.val();
            var todo = createTodo(content);
            todoList.append(todo);
            todoInput.val("");
        }
    });

    todoList.click(function (event) {
        switch (event.target.nodeName) {
            case "INPUT":
                var todoContent = $(event.target).next();
                todoContent.toggleClass("completed");
                break;
            case "IMG":
                var todoItem = $(event.target).parent();
                todoItem.remove();
                break;
        }
    });

    function createTodo(content) {
        return todoTemplate.replace("{content}", content);
    }
})();
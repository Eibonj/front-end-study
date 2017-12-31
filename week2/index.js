(function () {
    var todoList = $("#todo-list");
    var todoInput = $("#input-box input");
    var todoTemplate = '<div class="todo-item"><input type="checkbox"><div class="todo-content">{{content}}</div></div>'

    todoInput.keyup(function (event) {
        if (event.which === 13 || event.which === 108) {
            var content = todoInput.val();
            var todo = createTodo(content);
            todoList.append(todo);
            todoInput.val("");
        }
    });

    function createTodo(content) {
        return todoTemplate.replace("{{content}}", content);
    }
})()
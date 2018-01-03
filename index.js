(function () {
    var todoInput = $( "#todo-list input" )
    todoInput.keyup(function (event) {
        console.log();
        if(event.which === 13 || event.which === 108 ){
            alert("hello");
        }
    });
})
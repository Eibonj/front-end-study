(function () {
    var todoInput = $( "#input-box input" );
    todoInput.keyup(function (event) {
        if(event.which === 13 || event.which === 108 ){
            alert("hello");
        }
    });
})();

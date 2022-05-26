import { printTodos } from "./print-todos";

const $form = document.querySelector('.new-task');
const $input = document.querySelector('.new-task > input');


function init(todos) {
    const checkTodo = (event) => {
        event.preventDefault();
        console.log($input.value);
    
        //todo추가
        const todo = {title: $input.value, isDone: false};
        todos.push(todo);
        console.log(todos);
    
        //input 초기화
        $input.value = "";
        
        //todos출력
        printTodos(todos)
    };
    // 폼,input 입력 이벤트 추가하기
    // 입력했을때 todo추가
    $form.addEventListener('submit', checkTodo);
}


export {init};
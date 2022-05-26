import { log } from './utils';
import './todos.css';

const todos = []

//폼, input 입력 이벤트 추가하기
//입력 시 todo추가
const $form = document.querySelector('.new-task');
const $input = document.querySelector('.new-task > input');

const checkTodo = (event) => {
    event.preventDefault();

    console.log($input.value)

    //todo추가
    const todo = {title: $input.value, isDone: false};
    todos.push(todo);
    //todos뿌려주기

//input 초기화

// todos출력
}

$form.addEventListener('submit', checkTodo)




import { log } from './utils';
import './todos.css';

const todos = [
    {title: "HTML", isDone: true},
    {title: "JS", isDone: true},
    {title: "React", isDone: true}
]

//폼, input 입력 이벤트 추가하기
//입력 시 todo추가
const $form = document.querySelector('.new-task');
const $input = document.querySelector('.new-task > input');
const $todos = document.querySelector('#todos');

const printTodos = () => {
    const html = todos.map((todo) => {
        return '<li>' + todo.title + '</li>'
    });

    $todos.innerHTML = `<ul>${html.join('')}</ul>`
}
const checkTodo = (event) => {
    event.preventDefault();

    console.log($input.value)

    //todo추가
    const todo = {title: $input.value, isDone: false};
    todos.push(todo);
    //todos뿌려주기

    //input 초기화
    $input.value = ""

    printTodos();

// todos출력

}

$form.addEventListener('submit', checkTodo)




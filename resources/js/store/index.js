import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            {body: 'Go to the store', done: false},
            {body: 'Buy Xachapuri', done: true},
            {body: 'Finish homework', done: false},
        ]
    },
    mutations: {
        completeAll ({ todos }) { //samething --> deleteTodo(state)
            todos.forEach(todos => todos.done = true);
        },
        unComplete (state) {
            state.todos.forEach(todos => todos.done = false);
        },
        toggleTodo (state, todo) {
            todo.done = !todo.done
        },
        deleteTodo (state, todo) {//samething --> complete({ todos })
            state.todos.splice(state.todos.indexOf(todo), 1);
        }
    }
})
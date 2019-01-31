<template>
    <li class="todo :class=" :class="{ 'is-complete': todo.done}">
        
        <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)">
        <label v-text="todo.body"></label>
        <button @click="deleteTodo(todo)">x</button>
    </li>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        props: ['todo'],

        methods: mapMutations(['deleteTodo', 'toggleTodo'])
    }
</script>


<style>
    .todo.is-complete {
        color: grey;
    }
</style>
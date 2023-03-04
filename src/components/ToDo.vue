<template>
<div class="container-xl">
    <div class="row">
        <Today></Today>
        <FilterTasks></FilterTasks>
    </div>
    <TodoList></TodoList>
    <NewTask></NewTask>
    <FinishTasks></FinishTasks>
    <Footer></Footer>
</div>
</template>

<script setup>
import Today from './ToDo/Today.vue';
import FilterTasks from './ToDo/FilterTasks.vue';
import TodoList from './ToDo/TodoList.vue';
import NewTask from './ToDo/NewTask.vue';
import FinishTasks from './ToDo/FinishTasks.vue';
import Footer from './ToDo/Footer.vue';
</script>
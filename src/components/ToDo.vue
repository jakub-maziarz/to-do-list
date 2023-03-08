<template>
    <div class="container-2xl p-4 p-md-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <Today></Today>
            <FilterTasks></FilterTasks>
        </div>
        <TodoList></TodoList>
    </div>
</template>

<script setup>
import Today from './ToDo/Today.vue';
import FilterTasks from './ToDo/FilterTasks.vue';
import TodoList from './ToDo/TodoList.vue';
</script>
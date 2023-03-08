<template>
    <div class="tasks-list">
        <Task v-for="(task, index) in tasks" :task="task" :key="index"></Task>
    </div>
    <NewTask v-if="currentFilterOption === 'in progress'"></NewTask>
    <EmptyList v-else-if="tasks.length > 0" :filterOption="currentFilterOption"></EmptyList>
</template>
<script setup>
import Task from './Task.vue';
import NewTask from './NewTask.vue';
import EmptyList from './EmptyList.vue';

import { ref, inject, onMounted } from 'vue';

const eventBus = inject('eventBus');

const tasks = ref([]);
const currentFilterOption = ref('in progress');

onMounted(() => {
    filterTasks();
    eventBus.on('updateTasksList', (option) => {
        filterTasks(option);
    })
    eventBus.on('filterTasks', (option) => {
        currentFilterOption.value = option;
        filterTasks(option);
    })
})

const filterTasks = (state = 'in progress') => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) tasks.value = savedTasks.filter((task) => task.state === state);
}

</script>
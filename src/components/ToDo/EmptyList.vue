<template>
    <div class="tasks-list-clear px-2 d-flex align-items-center mt-3" @mouseover="activeHoveredDeleteIcon = true"
        @mouseleave="activeHoveredDeleteIcon = false" @click="clearTaskList()">
        <font-awesome-icon :icon="(activeHoveredDeleteIcon ? 'fa-solid' : 'fa-regular') + ' fa-circle-xmark'" size="xl" />
        <span class="fs-5 ms-4">Wyczyść listę</span>
    </div>
</template>
<script setup>
import { ref, inject } from 'vue';

const eventBus = inject('eventBus');
const props = defineProps(['filterOption']);

const activeHoveredDeleteIcon = ref(false);

const clearTaskList = () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
        const resultArr = savedTasks.filter((task) => task.state !== props.filterOption);
        localStorage.setItem('tasks', JSON.stringify(resultArr));
        eventBus.emit('updateTasksList', props.filterOption);
    }
}
</script>
<style>
.tasks-list-clear {
    color: var(--task-delete-color);
    cursor: pointer;
    width: 100%;
    width: fit-content;
}

.tasks-list-clear .fs-5 {
    font-size: 18px !important;
}
</style>
<template>
    <div class="new-task d-flex align-items-center py-3 px-2">
        <div class="new-task__icon border border-2 me-4" @click="addTask()">
            <font-awesome-icon icon="fa-solid fa-plus" size="2xs" />
        </div>
        <div class="new-task__input flex-grow-1 fs-5" :class="{ 'new-task__input_empty': emptyTaskName }">
            <input type="text" name="new-task" id="new-task" placeholder="Dodaj nowe zadanie..." v-model="taskInput"
                @keyup.enter="addTask()" ref="taskInputElement">
        </div>
    </div>
</template>
<script setup>
import { ref, inject } from 'vue';

const taskInput = ref('');
const taskInputElement = ref(null);
const emptyTaskName = ref(false);
const eventBus = inject('eventBus');

const addTask = () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (taskInput.value.length < 1) {
        emptyTaskName.value = true;
        taskInputElement.value.placeholder = "Podaj nazwę zadania...";
    } else {
        savedTasks.push({
            'text': taskInput.value,
            'state': 'in progress'
        });
        localStorage.setItem('tasks', JSON.stringify(savedTasks));
        taskInput.value = '';
        emptyTaskName.value = false;
        taskInputElement.value.placeholder = "Dodaj nowe zadanie...";
        eventBus.emit('updateTasksList', 'in progress');
    }
};
</script>
<style>
.new-task__icon {
    border-radius: 50%;
    padding: 0px 7px;
    color: var(--task-add-primary-color);
    border-color: var(--task-add-primary-color) !important;
    background-color: var(--task-add-secondary-color);
    cursor: pointer;
}

.new-task__icon:hover,
.new-task__icon:active {
    color: var(--task-add-secondary-color);
    background-color: var(--task-add-primary-color);
}

.new-task__input input {
    width: 100%;
    border: none;
    outline: none;
    color: var(--task-text-color);
}

.new-task__input.fs-5 {
    font-size: 18px !important;
}

.new-task__input input::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--task-add-primary-color) !important;
    opacity: 1;
    /* Firefox */
}

.new-task__input input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--task-add-primary-color) !important;
}

.new-task__input input::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--task-add-primary-color) !important;
}

.new-task__input_empty input::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--task-delete-color) !important;
    opacity: 1;
    /* Firefox */
}

.new-task__input_empty input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--task-delete-color) !important;
}

.new-task__input_empty input::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--task-delete-color) !important;
}
</style>


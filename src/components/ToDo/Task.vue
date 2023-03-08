<template>
    <div class="tasks-list__task d-flex align-items-center border-bottom border-1 py-3 px-2">
        <div class="tasks-list__marker me-4" :class="{ 'tasks-list__marker_finished': task.state === 'completed' }"
            @mouseover="activeHoveredMarker = true" @mouseleave="activeHoveredMarker = false">
            <font-awesome-icon :icon="(activeHoveredMarker ? 'fa-solid' : 'fa-regular') + ' fa-circle'" size="xl"
                @click="editTask('state', 'completed')" v-if="task.state === 'in progress'" />
            <font-awesome-icon :icon="(activeHoveredMarker ? 'fa-regular' : 'fa-solid') + ' fa-circle-check'" size="xl"
                @click="editTask('state', 'in progress')" v-else-if="task.state === 'completed'" />
            <div class="new-task__icon border border-2" @click="editTask('state', 'in progress')" v-else>
                <font-awesome-icon icon="fa-solid fa-plus" size="2xs" />
            </div>
        </div>
        <div class="tasks-list__task-input flex-grow-1 fs-5"
            :class="{ 'tasks-list__task-input_finished': task.state === 'completed' }">
            <input type="text" name="task" id="task" :value="task.text" @change="editTask('text')" ref="inputText"
                v-if="task.state === 'in progress'">
            <p v-else> {{ task.text }}</p>
        </div>
        <div class="tasks-list__delete ms-3" @mouseover="activeHoveredDeleteIcon = true"
            @mouseleave="activeHoveredDeleteIcon = false" @click="editTask('state', 'removed')"
            v-if="task.state === 'in progress'">
            <font-awesome-icon :icon="(activeHoveredDeleteIcon ? 'fa-solid' : 'fa-regular') + ' fa-circle-xmark'"
                size="xl" />
        </div>
    </div>
</template>
<script setup>
import { ref, inject } from 'vue';

const eventBus = inject('eventBus');
const props = defineProps(['task']);

const activeHoveredMarker = ref(false);
const activeHoveredDeleteIcon = ref(false);
const inputText = ref(null);

const editTask = (key, value = 'in progress') => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    const tasksToEdit = savedTasks.reduce((arr, item, index) => {
        if (item.text === props.task.text && item.state === props.task.state) {
            arr.push(index);
        }
        return arr;
    }, []);

    if (key === 'text') {
        savedTasks[tasksToEdit[0]][key] = inputText.value.value;
    } else if (key === 'state') {
        tasksToEdit.forEach((taskIndex) => {
            activeHoveredMarker.value = false;
            activeHoveredDeleteIcon.value = false;
            savedTasks[taskIndex][key] = value;
        });
    }

    localStorage.setItem('tasks', JSON.stringify(savedTasks));
    eventBus.emit('updateTasksList', props.task.state);
};

</script>
<style>
.tasks-list__task:hover {
    -webkit-box-shadow: var(--task-shadow);
    -moz-box-shadow: var(--task-shadow);
    box-shadow: var(--task-shadow);
    border-radius: 0.5rem;
}

.tasks-list__task-input input {
    width: 100%;
    border: none;
    outline: none;
    color: var(--task-text-color);
}

.tasks-list__task-input p {
    margin: 0;
}

.tasks-list__task-input_finished p {
    text-decoration: line-through;
}

.tasks-list__task-input.fs-5 {
    font-size: 18px !important;
}

.tasks-list__marker {
    color: var(--task-marker-primary-color);
    cursor: pointer;
}

.tasks-list__marker:hover,
.tasks-list__marker:active,
.tasks-list__marker_finished {
    color: var(--task-finished-marker-primary-color);
}

.tasks-list__delete {
    color: var(--task-delete-color);
    cursor: pointer;
}
</style>
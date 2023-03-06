<template>
    <div class="tasks-list pt-5">
        <div class="tasks-list__task d-flex align-items-center border-bottom border-1 pb-3 px-2 mb-3">
            <div class="tasks-list__marker me-4" @mouseover="activeHoveredMarker = true"
                @mouseleave="activeHoveredMarker = false" @click="activeHoveredMarker = true">
                <font-awesome-icon :icon="(activeHoveredMarker ? 'fa-solid' : 'fa-regular') + ' fa-circle'" size="xl" />
            </div>
            <div class="tasks-list__task-input flex-grow-1 fs-5">
                <input type="text" name="task" id="task">
            </div>
            <div class="tasks-list__delete ms-3" @mouseover="activeHoveredDeleteIcon = true"
                @mouseleave="activeHoveredDeleteIcon = false" @click="activeHoveredDeleteIcon = true">
                <font-awesome-icon :icon="(activeHoveredDeleteIcon ? 'fa-solid' : 'fa-regular') + ' fa-circle-xmark'"
                    size="xl" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const activeHoveredMarker = ref(false);
const activeHoveredDeleteIcon = ref(false);
</script>
<style>
.tasks-list__task-input input {
    width: 100%;
    border: none;
    outline: none;
    color: var(--task-text-color);
}

.tasks-list__marker {
    color: var(--task-marker-primary-color);
    cursor: pointer;
}

.tasks-list__marker:hover,
.tasks-list__marker:active {
    color: var(--task-finished-marker-primary-color);
}

.tasks-list__delete {
    color: var(--task-delete-color);
    cursor: pointer;
}
</style>
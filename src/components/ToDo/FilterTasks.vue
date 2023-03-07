<template>
    <div ref="filterDiv" class="d-flex align-items-center filter-tasks">
        <span class="filter-tasks__dots" :class="{ active: dropdown }" @click="$event => dropdown = !dropdown">
            <font-awesome-icon icon="fa-solid fa-ellipsis" size="2xl" />
        </span>
        <div class="filter-tasks__options rounded-1" v-if="dropdown">
            <div class="filter-tasks__option fs-6 px-3 py-2 border-bottom border-2 text-center"
                v-for="({ option, active }) in filterOptionsComputed" :key="option"
                @click="$event => filterTasks(option, filterOptions.indexOf(option))" :class="{ 'active': active }">
                {{
                    option.charAt(0).toUpperCase() + option.slice(1) }}
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, ref, inject } from 'vue';

const eventBus = inject('eventBus');

const dropdown = ref(false);
const filterDiv = ref(null);
const activeFilterOptionIndex = ref(null);
const filterOptions = ['completed', 'in progress', 'removed'];

onMounted(() => {
    document.addEventListener('click', (event) => {
        const isClickedOutside = !filterDiv.value.contains(event.target);
        if (isClickedOutside && dropdown.value === true) dropdown.value = false;
    })
})

function filterTasks(option, index) {
    activeFilterOptionIndex.value = index;
    dropdown.value = false;
    eventBus.emit("filterTasks", option);
}

const filterOptionsComputed = computed(() => {
    const tempArr = filterOptions.map((option, index) => ({
        option,
        active: activeFilterOptionIndex.value === index
    }));
    if (activeFilterOptionIndex.value === null) tempArr[1].active = true;

    return tempArr;
})
</script>
<style>
.filter-tasks {
    position: relative;
    z-index: 1;
}

.filter-tasks__dots {
    color: var(--filter-tasks-inactive-color);
    padding: 4px 12px;
    cursor: pointer;
}

.filter-tasks__dots:hover {
    color: var(--filter-tasks-active-color);
}

.filter-tasks__dots.active {
    color: var(--filter-tasks-active-color);
    -webkit-box-shadow: var(--filter-tasks-shadow);
    -moz-box-shadow: var(--filter-tasks-shadow);
    box-shadow: var(--filter-tasks-shadow);
    border-radius: 0.25rem;
    z-index: 1;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.filter-tasks__dots.active::after {
    content: '';
    padding: 5.5px 26px;
    background-color: var(--background-color);
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(4px);
}

.filter-tasks__options {
    -webkit-box-shadow: var(--filter-tasks-shadow);
    -moz-box-shadow: var(--filter-tasks-shadow);
    box-shadow: var(--filter-tasks-shadow);
    position: absolute;
    top: calc(100% + 2px);
    right: 0;
    border-top-right-radius: 0 !important;
    color: var(--filter-tasks-inactive-color);
    background-color: var(--background-color);
}

.filter-tasks__option {
    border-color: var(--filter-tasks-options-dividers-color) !important;
    width: 125px;
    cursor: pointer;
}

.filter-tasks__option.active {
    color: var(--filter-tasks-active-color-text);
}

.filter-tasks__option:not(.active):hover {
    color: var(--filter-tasks-active-color);
}
</style>
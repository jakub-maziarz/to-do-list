<template>
    <div class="d-flex flex-row align-items-center">
        <div class="calendar me-4" v-if="displayedDate">
            <div class="calendar__month text-center rounded-top px-1">
                <span class="fs-7">{{ displayedDate.month }}</span>
            </div>
            <div class="calendar__day text-center border border-2 rounded-bottom">
                <span class="fs-7">{{ displayedDate.day }}</span>
            </div>
        </div>
        <h1 class="fs-1 fw-bold my-0">Dzisiaj</h1>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const displayedDate = ref(null);

onMounted(() => {
    const currentDate = new Date();
    const month = currentDate.toLocaleDateString('pl-PL', { month: 'long' });
    displayedDate.value = {
        'month': month.toUpperCase().slice(0, 3),
        'day': currentDate.getDate()
    };
})
</script>

<style>
.calendar__month {
    background-color: var(--calendar-primary-color);
    color: var(--calendar-secondary-color);
}

.calendar__day {
    border-top: none !important;
    border-color: var(--calendar-primary-color) !important;
    background-color: var(--calendar-secondary-color);
    color: var(--header-text-color);
    line-height: 1;
}
</style>
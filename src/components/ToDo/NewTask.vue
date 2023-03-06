<template>
    <div class="new-task d-flex align-items-center px-2 mt-4">
        <div class="new-task__icon border border-2 me-4">
            <font-awesome-icon icon="fa-solid fa-plus" size="2xs" />
        </div>
        <div class="new-task__input flex-grow-1 fs-5">
            <input type="text" name="new-task" id="new-task" placeholder="Dodaj nowe zadanie...">
        </div>
    </div>
</template>
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
</style>


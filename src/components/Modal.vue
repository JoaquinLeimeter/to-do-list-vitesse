<script setup lang='ts'>
// props will be: titleText.
// I will emmit an event to close the modal.
//how will I do when I add the form? I'll make it in index.vue first
</script>

<template>
    <div class="background">
        <div class="modal">
            <div class="header">
                <h2>Add Task</h2>
                <button ></button>
            </div>
            <div class="body">
                <slot></slot> <!-- here goes the form -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.background {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.466);
    z-index: 1000;
}
.modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 500px; /* this will be removed, let heigth be given by content*/
    width: 500px; 
    background-color: red;
    margin: auto;
    margin-top: 50px;
}
.header {
    background-color: royalblue;
}
.body {
    background-color: seagreen;
}
</style>
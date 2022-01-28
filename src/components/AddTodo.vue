<script setup lang="ts">
    const inputText = ref('')

    const emit = defineEmits(["taskSubmitted"]);

    const onSubmit = () => {
        emit('taskSubmitted', inputText.value) // value from inputs is always a string
    }
</script>

<template>
    <div class="container">
        <h3>{{ inputText }}</h3>
        <form @submit.prevent="onSubmit">
            <label for="text">Task:</label>
            <input id="text" placeholder="wash clothes" v-model="inputText">
            <button type="submit" value="Submit">Add!</button>
        </form>
    </div>
</template>

<style>
</style>

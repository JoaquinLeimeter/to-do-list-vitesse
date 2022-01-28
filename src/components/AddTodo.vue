<script setup lang="ts">
    const inputText = ref('')

    const emit = defineEmits(["taskSubmitted"]);

    const onSubmit = () => {
        emit('taskSubmitted', inputText.value) // value from inputs is always a string
    }

const inputTextError = computed(() => inputText.value?.length >= 50);

watch(inputTextError, (value, oldValue) => {
  inputTextError.value && alert('warning, do not exeed 50 characters');
});
</script>

<template>
    <div class="container">
        <h3>{{ inputText }}</h3>
        <form @submit.prevent="onSubmit">
      <label for="text">Add Task:</label>
            <input id="text" placeholder="wash clothes" v-model="inputText">
      <span :class="inputTextError && 'spanError'">{{ inputText.length }} of 50 characters</span>
            <button type="submit" value="Submit">Add!</button>
        </form>
    </div>
</template>

<style>
</style>

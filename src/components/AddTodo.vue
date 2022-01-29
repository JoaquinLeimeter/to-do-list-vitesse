<script setup lang="ts">
const inputText = ref('')

const emit = defineEmits(["taskSubmitted", "closeModal"]);

const onSubmit = () => {
  inputText.value &&
    !inputTextError.value &&
    emit('taskSubmitted', inputText.value) &&
    emit('closeModal')
}

const inputTextError = computed(() => inputText.value?.length >= 50);

watch(inputTextError, () => {
  inputTextError.value && alert('warning, do not exeed 50 characters');
});
</script>

<template>
  <div class="formContainer">
    <form @submit.prevent="onSubmit">
      <input id="text" placeholder="wash clothes" v-model="inputText" />
      <span :class="inputTextError && 'spanError'">{{ inputText.length }} of 50 characters</span>
      <button type="submit" value="Submit">Add!</button>
    </form>
  </div>
</template>

<style>
.formContainer {
  background-color: #008080;
  padding: 1rem;
}
.formContainer > form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formContainer > form > div > label {
  padding: 0.6rem;
}
.formContainer button {
  border: 2px solid #fff;
  border-radius: 3px;
  padding: 0.5rem 1.5rem;
  margin: 0.3rem;
}
.formContainer input {
  margin: 0.5rem;
  padding: 0.5rem;
}
.spanError {
  color: red;
}
</style>

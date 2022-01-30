<script setup lang="ts">
const inputText = ref('')

const emit = defineEmits(["taskSubmitted", "closeModal"]);

const onSubmit = () => {
  inputText.value &&
    !inputTextError.value &&
    emit('taskSubmitted', inputText.value) ||
    emit('closeModal')
}

const inputTextError = computed(() => inputText.value?.length >= 50);

watch(inputTextError, () => {
  inputTextError.value && alert('warning, do not exeed 50 characters');
});
</script>

<template>
  <div class="p-8 bg-[#008080]">
    <form @submit.prevent="onSubmit" class="flex flex-col items-center">
      <input id="text" placeholder="wash clothes" v-model="inputText" class="m-2 p-3"/>
      <span :class="inputTextError && 'text-red-500'">{{ inputText.length }} of 50 characters</span>
      <button type="submit" value="Submit" class="border-2 rounded-sm border-grey-400 py-2 px-5 mt-3">Add!</button>
    </form>
  </div>
</template>

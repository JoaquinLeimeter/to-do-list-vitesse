<script setup lang="ts">
const inputText = ref('')

const emit = defineEmits(['taskSubmitted', 'closeModal'])

const inputTextError = computed(() => inputText.value?.length >= 50)

const onSubmit = () => {
  if (inputText.value && !inputTextError.value) {
    emit('taskSubmitted', inputText.value)
    emit('closeModal')
  }
  else {
    // eslint-disable-next-line no-alert
    alert('text too large')
  }
}

watch(inputTextError, () => {
  // eslint-disable-next-line no-alert
  inputTextError.value && alert('warning, do not exeed 50 characters')
})
</script>

<template>
  <div class="p-8 bg-[#008080]">
    <form class="flex flex-col items-center" @submit.prevent="onSubmit">
      <input id="text" v-model="inputText" placeholder="wash clothes" class="m-2 p-3">
      <span :class="inputTextError && 'text-red-500'">{{ inputText.length }} of 50 characters</span>
      <button type="submit" value="Submit" class="border-2 rounded-sm border-grey-400 py-2 px-5 mt-3">
        Add!
      </button>
    </form>
  </div>
</template>

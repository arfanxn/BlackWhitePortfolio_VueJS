<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flew-row items-center justify-between rounded-md px-4 py-2 gap-x-2 bg-white">
    <input
      placeholder="Search certificates"
      type="text"
      :value="inputValue"
      @input="(event) => onInput(event)"
      @blur="emit('onBlur', $event)"
      @focus="emit('onFocus', $event)"
      @keyup.enter="emit('onKeyupEnter', $event)"
      class="w-full h-full font-firacode autofill:bg-white text-black bg-white text-base placeholder:text-sm placeholder:text-neutral-800/50 focus:outline-0"
      :class="[inputClass]"
    />
    <LuSearch class="text-lg text-neutral-800/50" />
  </div>
</template>

<script setup lang="ts">
import { LuSearch } from '@kalimahapps/vue-icons'
import { computed } from 'vue'

const emit = defineEmits([
  'onFocus',
  'onBlur',
  'onInput',
  'onKeyupEnter',
  'update:modelValue',
  'update:value',
])

const props = defineProps<{
  inputClass?: string

  // model relateds
  value?: string | number | null
  modelValue?: string | number | null
}>()

const inputValue = computed(() => props.modelValue ?? props.value ?? '')

const onInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value

  // Emit both events to support all use cases
  emit('update:modelValue', value)
  emit('update:value', value)
  emit('onInput', event)
}
</script>

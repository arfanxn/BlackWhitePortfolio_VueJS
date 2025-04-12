<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flew-row items-center justify-between rounded-md px-4 py-2 gap-x-2 bg-white">
    <input
      :placeholder="placeholder"
      :type="type"
      :value="inputValue"
      @input="(event) => onInput(event)"
      @blur="emit('onBlur', $event)"
      @focus="emit('onFocus', $event)"
      @keyup.enter="emit('onKeyupEnter', $event)"
      class="w-full h-full font-firacode autofill:bg-white text-black bg-white text-base placeholder:text-sm placeholder:text-neutral-800/50 focus:outline-0"
      :class="[inputClass]"
    />
    <component ref="iconElement" :is="icon" class="text-neutral-800/50" :class="[iconClass]" />
  </div>
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue'

const emit = defineEmits([
  'onFocus',
  'onBlur',
  'onInput',
  'onKeyupEnter',
  'update:modelValue',
  'update:value',
])

type Props = {
  icon: Component
  iconClass?: string
  inputClass?: string

  placeholder?: string
  type?: 'text' | 'password' | 'email' | 'number' | 'tel'

  // model relateds
  value?: string | number | null
  modelValue?: string | number | null
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
})

const inputValue = computed(() => props.modelValue ?? props.value ?? '')

const onInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value

  // Emit both events to support all use cases
  emit('update:modelValue', value)
  emit('update:value', value)
  emit('onInput', event)
}
</script>

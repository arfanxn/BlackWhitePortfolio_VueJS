<template>
  <div
    v-if="isOpen"
    v-motion-pop
    ref="dropdownElement"
    class="absolute z-10 mt-1 left-0 bg-neutral-300/25 backdrop-blur-md rounded-md p-4"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { useTemplateRef } from 'vue'

type Props = {
  isOpen: boolean
}
defineProps<Props>()
const emit = defineEmits(['close'])

const dropdownElement = useTemplateRef<HTMLElement>('dropdownElement')
onClickOutside(dropdownElement, () => close())

const close = () => {
  emit('close')
}
</script>

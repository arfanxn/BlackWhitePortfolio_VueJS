<template>
  <Teleport to="body">
    <div
      v-if="show"
      role="dialog"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      @click.self="close"
    >
      <div
        class="main-container max-h-full main-horizontal-padding main-vertical-padding space-y-2"
      >
        <div class="flex flex-row justify-end">
          <button @click="$emit('close')" class="">
            <LuX class="text-2xl text-neutral-300 hover:text-white" />
          </button>
        </div>
        <div
          v-motion-pop
          class="relative bg-neutral-300/25 backdrop-blur-md rounded-md p-4"
          :class="props.class"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { LuX } from '@kalimahapps/vue-icons'
import { watch, onBeforeUnmount } from 'vue'

type Props = {
  show: boolean
  class?: string
}
const props = defineProps<Props>()

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
}

watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      document.body.classList.add('overflow-hidden')
      window.addEventListener('keydown', handleKeydown)
    } else {
      document.body.classList.remove('overflow-hidden')
      window.removeEventListener('keydown', handleKeydown)
    }
  },
  { immediate: true }, // Handle initial mount state
)

onBeforeUnmount(() => {
  document.body.classList.remove('overflow-hidden')
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <!-- Outside modal background -->
    <div
      v-if="show"
      role="dialog"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-hidden"
      @click.self="close"
    >
      <!-- Positioner -->
      <div
        class="main-container main-horizontal-padding main-vertical-padding space-y-2 overflow-hidden"
      >
        <!-- Close button container -->
        <div class="flex flex-row justify-end">
          <button @click="close" class="">
            <LuX class="text-2xl text-neutral-300 hover:text-white" />
          </button>
        </div>
        <!-- Modal container -->
        <div
          v-motion-pop
          class="relative bg-neutral-300/25 backdrop-blur-md rounded-md p-4 h-[calc(70vh+2rem)] overflow-y-auto"
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
import { watch, onBeforeUnmount, onMounted } from 'vue'
import { useBodyScrollLock } from '@/composables/useBodyScrollLock'

type Props = {
  show: boolean
  class?: string
}
const props = defineProps<Props>()

const emit = defineEmits(['close'])

const { unlockBodyScroll, lockBodyScroll } = useBodyScrollLock()

const close = () => {
  emit('close')
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
}

const addListeners = () => {
  window.addEventListener('keydown', handleKeydown)
}

const removeListeners = () => {
  window.removeEventListener('keydown', handleKeydown)
}

// Add this to handle cases where modal might be closed via parent component
const handleLockState = () => {
  if (props.show) {
    lockBodyScroll()
    addListeners()
  } else {
    unlockBodyScroll()
    removeListeners()
  }
}

// Use both mounted and watch to ensure proper cleanup
onMounted(handleLockState)
watch(() => props.show, handleLockState)
onBeforeUnmount(handleLockState)
</script>

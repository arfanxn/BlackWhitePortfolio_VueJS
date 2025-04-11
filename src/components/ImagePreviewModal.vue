<template>
  <transition name="modal">
    <div
      v-if="show"
      role="dialog"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      @click.self="close"
    >
      <div class="main-container max-h-full main-horizontal-padding main-vertical-padding">
        <div class="relative p-4 space-y-2 backdrop-blur bg-neutral-300/25 rounded-md">
          <div class="flex flex-row justify-end">
            <button @click="close" class="focus:outline-1 focus:ring-white">
              <LuX class="text-2xl text-neutral-300 hover:text-white" />
            </button>
          </div>

          <div class="flex items-center justify-center">
            <img
              :src="src"
              alt="Preview image"
              class="max-w-full max-h-[70vh] object-contain"
              @load="handleImageLoad"
            />
          </div>

          <div
            v-if="isLoading"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <LuLoaderCircle class="animate-spin text-4xl text-white" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue'
import { LuLoaderCircle, LuX } from '@kalimahapps/vue-icons'

const props = defineProps<{
  show: boolean
  src: string
}>()

const emit = defineEmits(['close'])
const isLoading = ref(true)

const close = () => {
  emit('close')
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
}

const handleImageLoad = () => {
  isLoading.value = false
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

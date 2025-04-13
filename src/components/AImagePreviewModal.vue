<template>
  <AModal :show="show">
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
  </AModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LuLoaderCircle } from '@kalimahapps/vue-icons'
import AModal from '@/components/AModal.vue'

defineProps<{
  show: boolean
  src: string
}>()

const isLoading = ref(true)
const handleImageLoad = () => {
  isLoading.value = false
}
</script>

<template>
  <AModal :isOpen="isOpen">
    <ACarousel :slides="imageUrls">
      <template v-slot:slide="{ slide, index }">
        <AImage
          containerClass="flex items-center justify-center h-[70vh]"
          class="max-w-full max-h-full object-contain"
          :src="slide"
          :alt="`Build image slide #${index + 1}`"
        />
      </template>
    </ACarousel>
  </AModal>
</template>

<script setup lang="ts">
import AModal from '@/components/AModal.vue'
import AImage from '@/components/AImage.vue'
import ACarousel from '@/components/ACarousel.vue'
import { computed } from 'vue'

const props = defineProps<{
  isOpen: boolean
  imageUrl?: string
  imageUrls?: string[]
}>()

const imageUrls = computed(() => {
  if (props.imageUrl && !props.imageUrls) return [props.imageUrl]
  else if (props.imageUrl && props.imageUrls) return [props.imageUrl, ...props.imageUrls]
  else return props.imageUrls as string[]
})
</script>

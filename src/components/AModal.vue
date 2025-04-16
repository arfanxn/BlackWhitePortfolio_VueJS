<template>
  <Teleport to="body">
    <!-- Modal background overlay that appears when the modal is open -->
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-hidden"
      @click.stop="close"
    >
      <!-- Container for the modal content -->
      <div class="layout-container layout-horizontal-padding space-y-2 overflow-hidden">
        <!-- Container for the close button, aligned to the right -->
        <div class="flex flex-row justify-end">
          <AButtonIcon @click="close" :icon="LuX" iconClass="text-2xl! font-bold!" />
        </div>
        <!-- Modal content area with a blurred background and rounded corners -->
        <div
          v-motion-pop
          class="relative bg-neutral-300/25 backdrop-blur-md rounded-md p-4 max-h-[calc(70vh+2rem)] scrollbar-thin overflow-y-auto"
          :class="props.class"
          @click.stop
        >
          <!-- Slot for dynamic content to be injected into the modal -->
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { LuX } from '@kalimahapps/vue-icons'
import AButtonIcon from '@/components/AButtonIcon.vue'

type Props = {
  isOpen: boolean
  class?: string
}
const props = defineProps<Props>()

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

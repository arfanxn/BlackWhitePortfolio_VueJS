<template>
  <figure class="group/image relative" :class="[containerClass]">
    <img
      @load="loaded"
      :src="src"
      :alt="alt"
      class="max-w-full object-contain"
      :class="[props.class]"
    />
    <div class="absolute inset-0" :class="[layerClass]"></div>
    <div
      v-if="isLoading"
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <LuLoaderCircle class="animate-spin text-4xl text-white" />
    </div>
  </figure>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { LuLoaderCircle } from '@kalimahapps/vue-icons'

const props = defineProps<{
  src?: string
  alt?: string
  containerClass?: string
  class?: string
  layerClass?: string
}>()

const layerClass = computed(() =>
  props.layerClass
    ? `${props.layerClass} group-hover/image:bg-transparent transition-colors duration-300`
    : ``,
)

const isLoading = ref(true)

const loaded = () => {
  isLoading.value = false
}
</script>

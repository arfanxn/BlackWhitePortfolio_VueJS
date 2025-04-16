<template>
  <figure class="group/image relative" :class="[containerClass]">
    <img
      v-lazy="{ src: src, lifecycle: lifecycle }"
      :alt="alt"
      class="max-w-full object-contain"
      :class="[props.class]"
    />
    <div class="absolute inset-0" :class="[overlayClass]"></div>
    <div
      v-if="isLoading"
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      :class="[loaderClass]"
    >
      <LuLoaderCircle class="animate-spin text-4xl text-white" :class="[loaderIconClass]" />
    </div>
  </figure>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { LuLoaderCircle } from '@kalimahapps/vue-icons'

const props = defineProps<{
  src?: string
  alt?: string
  containerClass?: string
  class?: string
  overlayClass?: string
  loaderClass?: string
  loaderIconClass?: string
}>()

const overlayClass = computed(() =>
  props.overlayClass
    ? `${props.overlayClass} group-hover/image:bg-transparent transition-colors duration-300`
    : ``,
)

const isLoading = ref(true)

const lifecycle = reactive({
  loading: () => {
    isLoading.value = true
  },
  error: () => {
    //
  },
  loaded: () => {
    isLoading.value = false
  },
})
</script>

<template>
  <figure class="relative" :class="[figureClass]">
    <img
      v-lazy="{ src: src, lifecycle: lifecycle }"
      :alt="alt"
      class=""
      :class="[props.imgClass]"
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
import { reactive, ref } from 'vue'
import { LuLoaderCircle } from '@kalimahapps/vue-icons'

const props = defineProps<{
  src?: string
  alt?: string
  figureClass?: string
  imgClass?: string
  overlayClass?: string
  loaderClass?: string
  loaderIconClass?: string
}>()

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

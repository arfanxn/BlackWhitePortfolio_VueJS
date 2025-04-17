<template>
  <router-link to="/">
    <AImage src="/logo.png" alt="Logo" :imgClass="imgClass" loaderClass="hidden" />
  </router-link>
</template>

<script setup lang="ts">
import AImage from '@/components/AImage.vue'

defineProps<{ imgClass?: string }>()
</script>

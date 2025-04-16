<template>
  <AButton
    class="inline-flex items-center text-sm md:text-base gap-x-1 text-neutral-300 outline outline-neutral-300 rounded-md"
  >
    <slot />
  </AButton>
</template>

<script setup lang="ts">
import AButton from '@/components/AButton.vue'
</script>

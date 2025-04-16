<template>
  <AButton class="group relative p-2! rounded-full! overflow-hidden hover:bg-neutral-300/25">
    <component :is="icon" class="text-xl text-neutral-300" :class="[iconClass]" />
  </AButton>
</template>

<script setup lang="ts">
import AButton from '@/components/AButton.vue'
import { type Component } from 'vue'

defineProps<{
  icon: Component
  iconClass?: string
}>()
</script>

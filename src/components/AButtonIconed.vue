<template>
  <AButton class="flex flex-row items-center font-firacode gap-x-2">
    <span>{{ label }}</span>
    <component :is="icon" :class="[iconClass]" />
  </AButton>
</template>

<script setup lang="ts">
import AButton from '@/components/AButton.vue'
import { type Component } from 'vue'

defineProps<{
  label: string
  icon: Component
  iconClass?: string
}>()
</script>

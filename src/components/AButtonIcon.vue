<template>
  <AButton>
    <component :is="icon" :class="[iconClass]" />
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

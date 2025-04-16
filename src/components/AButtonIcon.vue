<template>
  <AButton class="group relative p-2! rounded-full! overflow-hidden hover:bg-neutral-300/25">
    <AIconTooltipped
      v-if="tooltipLabel"
      :icon="icon"
      :iconClass="iconClass"
      :tooltipClass="tooltipClass"
      :tooltipLabel="tooltipLabel"
    />
    <component v-else :is="icon" class="text-xl text-neutral-300" :class="[iconClass]" />
  </AButton>
</template>

<script setup lang="ts">
import AButton from '@/components/AButton.vue'
import { type Component } from 'vue'
import AIconTooltipped from '@/components/AIconTooltipped.vue'

defineProps<{
  icon: Component
  iconClass?: string
  tooltipClass?: string
  tooltipLabel?: string
}>()
</script>

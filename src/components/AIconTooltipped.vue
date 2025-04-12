<template>
  <div class="relative block">
    <component ref="iconElement" :is="icon" class="text-neutral-300" :class="[iconClass]" />
    <!-- Tooltip with pseudo-element arrow -->
    <div
      class="absolute -top-8 left-1/2 -translate-x-1/2 opacity-100 group-hover/skill:opacity-100 transition-opacity duration-300 px-2 py-1 bg-neutral-300 rounded-md font-firacode text-xs text-black whitespace-nowrap before:absolute before:bottom-[-4px] before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:bg-neutral-300 before:rotate-45 before:content-['']"
      :class="[isHovered ? 'block' : 'hidden', tooltipClass]"
    >
      <slot name="tooltip">
        {{ tooltipLabel }}
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef, type Component } from 'vue'
import { useElementHover } from '@vueuse/core'

defineProps<{
  icon: Component
  iconClass?: string
  tooltipClass?: string
  tooltipLabel?: string
}>()

const iconElement = useTemplateRef<HTMLElement>('iconElement')
const isHovered = useElementHover(iconElement)
</script>

<template>
  <li class="group/skill relative block">
    <component
      :is="skill.icon"
      :class="`text-neutral-300 ${iconClass} ${skill.iconClass}`"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    />
    <!-- Tooltip with pseudo-element arrow -->
    <div
      :class="`absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 px-2 py-1 bg-neutral-300 rounded-md font-firacode text-xs text-black whitespace-nowrap
      before:absolute before:bottom-[-4px] before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:bg-neutral-300 before:rotate-45 before:content-['']
      ${isHovered ? 'block' : 'hidden'} ${tooltipClass}`"
    >
      {{ skill.name }}
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Skill } from '@/constants/skillConstants'

defineProps<{ skill: Skill; iconClass?: string; tooltipClass?: string }>()
const isHovered = ref(false)
</script>

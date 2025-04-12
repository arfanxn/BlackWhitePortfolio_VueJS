<template>
  <OnClickOutside
    class="relative h-full"
    @trigger="closeDropdown"
    @mouseenter="isDropdownHovered = true"
    @mouseleave="isDropdownHovered = false"
  >
    <AOutlineButton
      class="text-sm md:text-md inline-flex items-center gap-x-1"
      :class="[buttonClass]"
      @click="toggleDropdown"
    >
      <slot name="button"></slot>
      <LuChevronDown class="text-xl" />
    </AOutlineButton>
    <!-- Animated Dropdown -->
    <div
      v-if="isDropdownOpen"
      v-motion-pop
      class="absolute z-10 mt-1 left-0 bg-neutral-300/25 backdrop-blur-md rounded-md p-4"
      :class="[dropdownClass]"
    >
      <slot name="dropdown"></slot>
    </div>
  </OnClickOutside>
</template>

<script setup lang="ts">
import AOutlineButton from '@/components/AOutlineButton.vue'
import { LuChevronDown } from '@kalimahapps/vue-icons'
import { OnClickOutside } from '@vueuse/components'
import { useDropdown } from '@/composables/useDropdown'

defineProps<{
  buttonClass?: string
  dropdownClass?: string
}>()

const { isDropdownOpen, isDropdownHovered, toggleDropdown, closeDropdown } = useDropdown()
</script>

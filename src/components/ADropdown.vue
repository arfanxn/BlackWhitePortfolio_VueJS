<template>
  <OnClickOutside class="relative h-full" @trigger="closeDropdown">
    <AButtonOutlined
      class="relative text-sm md:text-base inline-flex items-center gap-x-1"
      :class="[buttonClass]"
      @click="toggleDropdown"
    >
      <slot name="button"></slot>
      <LuChevronDown class="text-xl" />
    </AButtonOutlined>

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
import AButtonOutlined from '@/components/AButtonOutlined.vue'
import { LuChevronDown } from '@kalimahapps/vue-icons'
import { OnClickOutside } from '@vueuse/components'
import { useDropdown } from '@/composables/useDropdown'

defineProps<{
  buttonClass?: string
  dropdownClass?: string
}>()

const { isDropdownOpen, toggleDropdown, closeDropdown } = useDropdown()
</script>

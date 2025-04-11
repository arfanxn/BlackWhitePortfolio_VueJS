<template>
  <div
    class="relative h-full"
    v-on-click-outside="closeDropdown"
    @mouseenter="isDropdownHovered = true"
    @mouseleave="isDropdownHovered = false"
  >
    <OutlineButton
      class="text-sm md:text-md inline-flex items-center gap-x-1"
      @click="toggleDropdown"
    >
      <div class="inline-flex gap-x-0">
        <span>Organization</span>
        <span v-if="selectedOrganization">:</span>
      </div>
      <span>{{ selectedOrganization }}</span>
      <LuChevronDown class="text-xl" />
    </OutlineButton>
    <!-- Animated Dropdown -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isDropdownOpen"
        class="absolute z-10 mt-1 left-0 min-w-[50vw] md:min-w-96 bg-neutral-300/25 backdrop-blur-md rounded-md"
      >
        <ul class="flex flex-row flex-wrap gap-4 list-none p-4">
          <li v-for="organization in organizations" :key="organization">
            <button
              class="font-firacode rounded-md px-2 py-1 outline-1 outline-neutral-300 text-neutral-300 text-sm md:text-md"
              :class="[organization === selectedOrganization ? 'bg-neutral-300/25' : '']"
              @click="() => selectOrganization(organization)"
            >
              {{ organization }}
            </button>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import OutlineButton from '@/components/OutlineButton.vue'
import { LuChevronDown } from '@kalimahapps/vue-icons'
import { vOnClickOutside } from '@vueuse/components'
import { useDropdown } from '@/composables/useDropdown'

const emit = defineEmits(['organizationSelected'])

defineProps<{
  organizations: string[]
}>()

const { isDropdownOpen, isDropdownHovered, toggleDropdown, closeDropdown } = useDropdown()
const selectedOrganization = defineModel<string | undefined>('selectedOrganization')

const selectOrganization = (organization: string) => {
  selectedOrganization.value =
    selectedOrganization.value === organization ? undefined : organization
  emit('organizationSelected')
}
</script>

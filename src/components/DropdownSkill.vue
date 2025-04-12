<template>
  <OnClickOutside
    class="relative h-full"
    @trigger="closeDropdown"
    @mouseenter="isDropdownHovered = true"
    @mouseleave="isDropdownHovered = false"
  >
    <OutlineButton
      class="text-sm md:text-md inline-flex items-center gap-x-1"
      @click="toggleDropdown"
    >
      <div class="inline-flex gap-x-0">
        <span>Skill</span>
        <span v-if="selectedSkill">:</span>
      </div>
      <SkillItem v-if="selectedSkill" :skill="selectedSkill" class="text-xl" />
      <LuChevronDown class="text-xl" />
    </OutlineButton>

    <!-- Animated Dropdown -->

    <div
      v-if="isDropdownOpen"
      v-motion-pop
      class="absolute z-10 mt-1 left-0 min-w-54 md:min-w-54 bg-neutral-300/25 backdrop-blur-md rounded-md"
    >
      <ul class="flex flex-row flex-wrap gap-4 list-none p-4">
        <SkillItem
          @click="() => selectSkill(skill)"
          v-for="skill in skills"
          :key="skill.name"
          :skill="skill"
          class="text-2xl"
          :class="[
            skill.name === selectedSkill?.name
              ? 'before:absolute before:-z-10 before:-inset-2 before:rounded-md before:bg-neutral-300/25'
              : '',
          ]"
        />
      </ul>
    </div>
  </OnClickOutside>
</template>

<script setup lang="ts">
import SkillItem from '@/components/SkillItem.vue'
import OutlineButton from '@/components/OutlineButton.vue'
import { LuChevronDown } from '@kalimahapps/vue-icons'
import { defineEmits } from 'vue'
import { type Skill } from '@/constants/skillConstants'
import { OnClickOutside } from '@vueuse/components'
import { useDropdown } from '@/composables/useDropdown'

const emit = defineEmits(['skillSelected'])

defineProps<{
  skills: Skill[]
}>()

const { isDropdownOpen, isDropdownHovered, toggleDropdown, closeDropdown } = useDropdown()
const selectedSkill = defineModel<Skill | undefined>('selectedSkill')

const selectSkill = (skill: Skill) => {
  selectedSkill.value = selectedSkill.value?.name === skill.name ? undefined : skill
  emit('skillSelected', skill)
}
</script>

<template>
  <div
    class="relative h-full"
    v-on-click-outside="
      () => {
        isOpened = false
      }
    "
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <button
      class="w-full h-full inline-flex gap-x-1 items-center font-firacode text-sm md:text-md text-neutral-300 py-2 px-4 rounded-md outline outline-neutral-300"
      @click="isOpened = !isOpened"
    >
      <div class="inline-flex gap-x-0">
        <span>Skill</span>
        <span v-if="selectedSkill">:</span>
      </div>
      <SkillItem v-if="selectedSkill" :skill="selectedSkill" class="text-2xl" />
      <LuChevronDown class="text-lg" />
    </button>
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
        v-if="isOpened"
        class="absolute z-10 mt-1 left-0 md:min-w-54 bg-neutral-300/25 backdrop-blur-md rounded-md"
      >
        <ul class="flex flex-row flex-wrap gap-4 list-none p-4">
          <SkillItem
            @click="() => onSkillSelect(skill)"
            v-for="skill in skills"
            :key="skill.name"
            :skill="skill"
            class="text-2xl"
            :class="[
              skill.name === selectedSkill?.name
                ? 'before:absolute before:-inset-2 before:rounded-md before:bg-neutral-300/25'
                : '',
            ]"
          />
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SkillItem from '@/components/SkillItem.vue'
import { LuChevronDown } from '@kalimahapps/vue-icons'
import { ref, defineEmits } from 'vue'
import { type Skill } from '@/constants/skillConstants'
import { vOnClickOutside } from '@vueuse/components'

const emit = defineEmits(['onSkillSelect'])

defineProps<{
  skills: Skill[]
}>()

const isHovered = ref(false)
const isOpened = ref(false)
const selectedSkill = defineModel<Skill | undefined>('selectedSkill')

const onSkillSelect = (skill: Skill) => {
  selectedSkill.value = selectedSkill.value?.name === skill.name ? undefined : skill
  emit('onSkillSelect', skill)
}
</script>

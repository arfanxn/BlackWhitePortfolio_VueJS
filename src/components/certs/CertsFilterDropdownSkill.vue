<template>
  <ADropdown dropdownClass="min-w-54 md:min-w-54 p-2!">
    <template v-slot:button>
      <div class="inline-flex gap-x-0">
        <span>Skill</span>
        <span v-if="selectedSkill">:</span>
      </div>
      <AIconTooltipped
        v-if="selectedSkill"
        iconClass="text-xl"
        :icon="selectedSkill.icon"
        :tooltipLabel="selectedSkill.name"
      />
    </template>

    <template v-slot:dropdown>
      <ul class="flex flex-row flex-wrap">
        <li v-for="skill in skills" :key="skill.name">
          <button
            @click.stop="() => selectSkill(skill)"
            type="button"
            class="p-2 rounded-md"
            :class="[skill.name === selectedSkill?.name ? 'bg-neutral-300/25' : '']"
          >
            <AIconTooltipped iconClass="text-2xl" :icon="skill.icon" :tooltipLabel="skill.name" />
          </button>
        </li>
      </ul>
    </template>
  </ADropdown>
</template>

<script setup lang="ts">
import AIconTooltipped from '@/components/AIconTooltipped.vue'
import ADropdown from '@/components/ADropdown.vue'
import { defineEmits } from 'vue'
import { type Skill } from '@/constants/skillConstants'

const emit = defineEmits(['skillSelected'])

defineProps<{
  skills: Skill[]
}>()

const selectedSkill = defineModel<Skill | undefined>('selectedSkill')

const selectSkill = (skill: Skill) => {
  selectedSkill.value = selectedSkill.value?.name === skill.name ? undefined : skill
  emit('skillSelected', skill)
}
</script>

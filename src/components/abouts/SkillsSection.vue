<template>
  <section class="space-y-6">
    <header>
      <h2 class="font-firacode text-base md:text-lg font-semibold uppercase text-neutral-200">
        Skills
      </h2>
    </header>

    <div v-for="category in skillCategories" :key="category.name" class="space-y-4">
      <h3 class="font-firacode font-semibold text-white text-base">
        {{ category.name }}
      </h3>

      <ul class="flex flex-row flex-wrap items-baseline w-full gap-4 list-none">
        <SkillItem
          v-for="skill in category.skills"
          :key="skill.name"
          :skill="skill"
          icon-class="text-4xl"
        />
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import SkillItem from '@/components/SkillItem.vue'
import { skillCategories } from '@/constants/skillConstants'
</script>

<template>
  <section class="space-y-6">
    <header v-motion-fade-visible-once :duration="300" :delay="300">
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
          iconClass="text-4xl"
          v-motion-slide-visible-once-bottom
          :duration="300"
          :delay="300"
        />
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import SkillItem from '@/components/SkillItem.vue'
import { skillCategories } from '@/constants/skillConstants'
</script>

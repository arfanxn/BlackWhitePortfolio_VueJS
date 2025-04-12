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

      <ul class="flex flex-row flex-wrap items-baseline w-full gap-4">
        <li v-for="skill in category.skills" :key="skill.name">
          <AIconTooltipped
            iconClass="text-4xl"
            :icon="skill.icon"
            :tooltipLabel="skill.name"
            v-motion-slide-visible-once-bottom
            :duration="300"
            :delay="300"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import AIconTooltipped from '@/components/AIconTooltipped.vue'
import { skillCategories } from '@/constants/skillConstants'
</script>

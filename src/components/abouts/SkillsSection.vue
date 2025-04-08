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
        <li v-for="skill in category.skills" :key="skill.name" class="group relative">
          <component :is="skill.icon" :class="`text-4xl text-neutral-300 ${skill.iconClass}`" />
          <!-- Tooltip with pseudo-element arrow -->
          <div
            class="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 bg-neutral-300 rounded-md font-firacode text-xs text-black whitespace-nowrap before:absolute before:bottom-[-4px] before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:bg-neutral-300 before:rotate-45 before:content-['']"
          >
            {{ skill.name }}
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skillCategories } from '@/constants/skillConstants'
</script>

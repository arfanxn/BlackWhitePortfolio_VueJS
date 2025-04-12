<template>
  <section class="space-y-6">
    <header v-motion-fade-visible-once :duration="300" :delay="300">
      <h2 class="font-firacode text-base md:text-lg font-semibold uppercase text-neutral-200">
        Experience
      </h2>
    </header>

    <ul class="space-y-4 list-none">
      <li
        v-for="experience in experiences"
        :key="experience.organization"
        class="group"
        v-motion-slide-visible-once-left
        :duration="300"
        :delay="300"
      >
        <article>
          <a class="cursor-pointer w-fit block" :href="experience.url" target="_blank">
            <h3 class="font-firacode font-semibold text-white text-base group-hover:underline">
              {{ experience.organization }}
            </h3>
          </a>
          <div class="font-firacode mt-1 flex flex-row gap-2 items-baseline justify-between">
            <p class="font-firacode text-neutral-300 text-sm md:text-base max-w-1/2 md:max-w-3/4">
              {{ experience.role }}
            </p>
            <time class="font-firacode text-sm text-neutral-300 md:text-base text-end">
              {{ formatTimeRange(experience.startedAt, experience.finishedAt) }}
            </time>
          </div>
        </article>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { formatTimeRange } from '@/utils/stringUtils'
import { experiences } from '@/constants/experienceConstants'
</script>

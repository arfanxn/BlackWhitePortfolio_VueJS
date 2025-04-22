<template>
  <section class="space-y-6">
    <header v-motion-fade-visible-once :duration="300" :delay="300">
      <h2 class="font-firacode text-base md:text-lg font-semibold uppercase text-neutral-200">
        Education
      </h2>
    </header>

    <ul class="space-y-4 list-none">
      <li
        v-for="education in educations"
        :key="education.school"
        class="group"
        v-motion-slide-visible-once-left
        :duration="500"
        :delay="300"
      >
        <article>
          <a class="cursor-pointer w-fit block" :href="education.url" target="_blank">
            <h3 class="font-firacode font-semibold text-white text-base group-hover:underline">
              {{ education.school }}
            </h3>
          </a>
          <div class="font-firacode mt-1 flex flex-row gap-2 items-baseline justify-between">
            <p class="font-firacode text-neutral-300 text-sm md:text-base max-w-1/2 md:max-w-3/4">
              {{ education.field }}
            </p>

            <ADateRange
              :start="education.startedAt"
              :end="education.finishedAt ?? 'Present'"
              class="text-sm md:text-base"
            />
          </div>
        </article>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { educations } from '@/constants/educationConstants'
import ADateRange from '@/components/ADateRange.vue'
</script>

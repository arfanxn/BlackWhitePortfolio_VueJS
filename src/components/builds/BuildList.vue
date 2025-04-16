<template>
  <div>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      <li v-for="build in buildStore.builds" :key="build.title">
        <BuildCard :build="build" v-motion-slide-visible-once-left :duration="500" :delay="300" />
      </li>
    </ul>

    <p v-if="buildStore.builds.length === 0" class="font-firacode text-base text-neutral-300">
      No projects / portfolios / works found
    </p>
  </div>
</template>

<script setup lang="ts">
import BuildCard from '@/components/builds/BuildCard.vue'
import { useBuildStore } from '@/stores/useBuildStore'

const buildStore = useBuildStore()
</script>

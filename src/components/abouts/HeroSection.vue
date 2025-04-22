<template>
  <section class="min-h-screen flex flex-col justify-center gap-y-6 md:gap-y-6">
    <h2
      v-motion-slide-top
      :duration="500"
      :delay="0"
      class="uppercase font-firacode text-base md:text-lg text-neutral-300"
    >
      Hi, I'm Arfan
    </h2>
    <p
      class="font-semibold text-2xl md:text-3xl font-firacode break-words"
      v-motion-slide-left
      :duration="500"
      :delay="300"
    >
      <span v-html="shortBiography.first" class="text-white"></span>
      <span
        v-html="shortBiography.last"
        class="text-neutral-300"
        v-motion-fade
        :duration="500"
        :delay="600"
      >
      </span>
    </p>
    <ul class="flex gap-x-4">
      <li
        v-for="(social, index) in socials"
        :key="social.uri"
        v-motion-slide-left
        :duration="500"
        :delay="900 + index * 50"
      >
        <a :href="social.uri" target="_blank">
          <component :is="social.icon" class="text-xl md:text-2xl text-neutral-300 rounded-sm" />
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { socials } from '@/constants/socialConstants'
import { useTimeout } from '@vueuse/core'
import { onBeforeUnmount, onMounted } from 'vue'
import { useBodyScrollLock } from '@/composables/useBodyScrollLock'
import { shortBiography } from '@/constants/aboutConstants'

const { lockBodyScroll, unlockBodyScroll } = useBodyScrollLock()

// Calculate total animation duration for scroll unlock
const animationDurationCount =
  500 /* the animation duration */ + 900 /* the total delays */ + socials.length * 50

onMounted(() => {
  lockBodyScroll()

  useTimeout(animationDurationCount, {
    callback: () => unlockBodyScroll(),
  })
})
onBeforeUnmount(() => {
  unlockBodyScroll()
})
</script>

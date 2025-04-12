<template>
  <section class="min-h-screen flex flex-col justify-center gap-y-6 md:gap-y-6">
    <h2
      v-motion-slide-top
      :duration="tap(animationDuration, (d) => incAnimationDuration(d))"
      :delay="getAnimationDelay()"
      class="uppercase font-firacode text-base md:text-lg text-neutral-300"
    >
      Hi, I'm Arfan
    </h2>
    <p
      class="font-semibold text-2xl md:text-3xl font-firacode break-words"
      v-motion-slide-left
      :duration="tap(animationDuration, (d) => incAnimationDuration(d))"
      :delay="incAnimationDelay(animationDelay)"
    >
      <span class="text-white">Backend Developer and Web 3 enthusiast from Jakarta.</span>
      <span
        class="text-neutral-300"
        v-motion-fade
        :duration="tap(animationDuration, (d) => incAnimationDuration(d))"
        :delay="incAnimationDelay(animationDelay)"
      >
        Interested in Golang, Rust, and Solidity.</span
      >
    </p>
    <ul class="flex gap-x-4">
      <li
        v-for="(social, index) in socials"
        :key="social.uri"
        v-motion-slide-left
        :duration="
          tap(animationDuration, (d) =>
            incAnimationDuration(index === 0 ? d : socialIconAnimationDelay),
          )
        "
        :delay="
          index === 0
            ? incAnimationDelay(animationDelay)
            : incAnimationDelay(socialIconAnimationDelay)
        "
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
import { tap } from '@/utils/utils'
import { useCounter, useTimeout } from '@vueuse/core'
import { useScrollLock } from '@vueuse/core'
import { onBeforeUnmount, onMounted } from 'vue'

const animationDuration = 500
const animationDelay = 300
const socialIconAnimationDelay = 50
const { inc: incAnimationDelay, get: getAnimationDelay } = useCounter(0)
const { inc: incAnimationDuration, get: getAnimationDuration } = useCounter(0)
const scrollLock = useScrollLock(document.body)

onMounted(() => {
  scrollLock.value = true

  useTimeout(getAnimationDuration() / 100, {
    callback: () => (scrollLock.value = false),
  })
})
onBeforeUnmount(() => {
  scrollLock.value = false
})
</script>

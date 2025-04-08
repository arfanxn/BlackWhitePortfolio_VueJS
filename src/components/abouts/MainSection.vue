<template>
  <section class="min-h-screen flex flex-col justify-center gap-y-6 md:gap-y-6">
    <h2 class="uppercase font-firacode text-base md:text-lg">Hi, I'm Arfan</h2>
    <p class="font-semibold text-2xl md:text-3xl font-firacode break-words">
      <span class="text-white">Backend Developer and Web 3 enthusiast from Jakarta.</span>
      <span class="text-neutral-300"> Interested in Golang, Rust, and Solidity.</span>
    </p>
    <ul class="flex gap-x-4">
      <li v-for="social in socials" :key="social.uri">
        <a :href="social.uri" target="_blank">
          <component :is="social.icon" class="text-xl md:text-2xl text-neutral-300 rounded-sm" />
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { socials } from '@/constants/socialConstants'
</script>

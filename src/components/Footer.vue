<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="w-full mt-20 md:mt-28">
    <hr class="border-t border-neutral-300/25" />
    <div
      class="main-container mx-auto py-10 md:py-14 main-horizontal-padding flex flex-row justify-between gap-8"
    >
      <figure>
        <router-link to="/">
          <img class="max-w-20 md:max-w-28" src="/logo.png" alt="Logo" />
        </router-link>
      </figure>

      <nav>
        <ul>
          <li v-for="navigation in navigations" :key="navigation.label">
            <router-link
              class="font-firacode font-normal text-neutral-300 text-sm md:text-base hover:text-white transition-colors"
              :class="{ 'text-white': $route.path === navigation.url }"
              :to="navigation.url"
            >
              {{ navigation.label }}
            </router-link>
          </li>
        </ul>
      </nav>

      <nav>
        <ul>
          <li v-for="social in socials" :key="social.uri">
            <a
              class="font-firacode font-normal text-neutral-300 text-sm md:text-base hover:text-white transition-colors"
              :href="social.uri"
            >
              {{ social.name }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { socials } from '@/constants/socialConstants'
import { navigations } from '@/constants/navigationConstants'
</script>

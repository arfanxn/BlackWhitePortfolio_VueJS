<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="w-full main-top-margin">
    <hr class="border-t border-neutral-300/25" />
    <div
      class="layout-container mx-auto py-10 md:py-14 layout-horizontal-padding flex flex-row justify-between gap-8"
    >
      <figure class="max-w-20 md:max-w-28">
        <router-link to="/">
          <AImage src="/logo.png" alt="Site logo - return to homepage" loaderClass="hidden" />
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
import AImage from '@/components/AImage.vue'
</script>

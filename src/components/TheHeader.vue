<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/50 w-full">
    <nav
      class="layout-container mx-auto flex flex-row items-baseline justify-between py-6 md:py-6 layout-horizontal-padding"
    >
      <figure class="max-w-6 md:max-w-8">
        <router-link to="/">
          <AImage src="/logo.png" alt="Logo" loaderClass="hidden" />
        </router-link>
      </figure>

      <ul class="flex gap-x-4" role="navigation">
        <li v-for="navigation in navigations" :key="navigation.url">
          <router-link
            class="font-firacode font-semibold text-neutral-300 text-sm md:text-base hover:text-white transition-colors"
            :class="{ 'text-white': $route.path === navigation.url }"
            :to="navigation.url"
          >
            {{ navigation.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { navigations } from '@/constants/navigationConstants'
import AImage from '@/components/AImage.vue'
</script>

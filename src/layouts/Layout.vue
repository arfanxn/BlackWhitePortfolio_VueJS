<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="relative flex flex-col justify-between min-h-screen">
    <TheHeader />

    <main class="relative main-container mx-auto main-horizontal-padding">
      <slot />
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

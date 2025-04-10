<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Header />

  <main class="main-container mx-auto main-horizontal-padding">
    <slot />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

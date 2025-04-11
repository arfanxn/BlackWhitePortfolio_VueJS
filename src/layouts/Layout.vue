<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="relative flex flex-col justify-between min-h-screen">
    <Header />

    <main class="relative main-container mx-auto main-horizontal-padding">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

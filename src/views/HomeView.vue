<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <FontAwesomeIcon :icon="faArrowRight" />
    <h1 class="text-amber-400">HELLO WORLD</h1>
    <TheWelcome />
  </main>
</template>

<template>
  <Layout>
    <main
      class="flex flex-col main-top-margin gap-y-8 md:gap-y-8"
      v-motion-fade
      :duration="500"
      :delay="0"
    >
      <h1 class="font-firacode font-semibold text-2xl md:text-4xl text-white">Builds</h1>

      <BuildQuery />
      <BuildList />
    </main>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/Layout.vue'
import BuildList from '@/components/builds/BuildList.vue'
import BuildQuery from '@/components/builds/BuildQuery.vue'
</script>

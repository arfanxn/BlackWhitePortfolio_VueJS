<template>
  <Layout>
    <main
      class="flex flex-col main-top-margin gap-y-8 md:gap-y-8"
      v-motion-fade
      :duration="500"
      :delay="0"
    >
      <h1 class="font-firacode font-semibold text-2xl md:text-4xl text-white">Certificates</h1>

      <CertFilter />

      <CertsList />
    </main>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/Layout.vue'
import CertFilter from '@/components/certs/CertsFilter.vue'
import CertsList from '@/components/certs/CertsList.vue'
</script>

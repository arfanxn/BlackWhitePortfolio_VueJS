<template>
  <Layout>
    <main
      class="flex flex-col main-top-margin gap-y-8 md:gap-y-8"
      v-motion-fade
      :duration="500"
      :delay="0"
    >
      <h1 class="font-firacode font-bold text-2xl md:text-4xl text-white">Certificates</h1>

      <CertQuery />
      <CertList />
    </main>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/Layout.vue'
import CertQuery from '@/components/certs/CertQuery.vue'
import CertList from '@/components/certs/CertList.vue'
</script>

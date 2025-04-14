<template>
  <section>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 list-none">
      <li v-for="certificate in certificateStore.certificates" :key="certificate.name">
        <CertCard
          v-motion-slide-visible-once-left
          :duration="500"
          :delay="300"
          :certificate="certificate"
        />
      </li>
    </ul>

    <p
      v-if="certificateStore.certificates.length === 0"
      class="font-firacode text-base text-neutral-300"
    >
      No certificates found
    </p>
  </section>
</template>

<script setup lang="ts">
import CertCard from '@/components/certs/CertCard.vue'
import { useCertificateStore } from '@/stores/useCertificateStore'

const certificateStore = useCertificateStore()
</script>

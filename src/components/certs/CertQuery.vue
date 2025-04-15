<template>
  <section>
    <div class="flex flex-col gap-4 md:gap-4">
      <AFieldIconed
        v-model="certificateQuery.keyword"
        @onInput="certificateStore.queryCertificates"
        :icon="LuSearch"
        placeholder="Search certificates"
        class="w-full md:w-[50%]"
      />

      <div class="flex flex-row flex-wrap items-center gap-4 md:gap-4">
        <CertQueryFilterSkill />
        <CertQueryFilterOrganization />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AFieldIconed from '@/components/AFieldIconed.vue'
import CertQueryFilterSkill from '@/components/certs/CertQueryFilterSkill.vue'
import CertQueryFilterOrganization from '@/components/certs/CertQueryFilterOrganization.vue'
import {} from '@/constants/certificateConstants'
import { useCertificateStore } from '@/stores/useCertificateStore'
import { LuSearch } from '@kalimahapps/vue-icons'
import { storeToRefs } from 'pinia'

const certificateStore = useCertificateStore()
const { certificateQuery } = storeToRefs(certificateStore)
</script>

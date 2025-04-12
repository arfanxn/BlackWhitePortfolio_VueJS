<template>
  <section>
    <div class="flex flex-col gap-4 md:gap-4">
      <SearchBar
        v-model="certificateStore.keyword"
        @onInput="certificateStore.filter"
        class="md:w-[50%]"
      />

      <div class="flex flex-row flex-wrap items-center gap-4 md:gap-4">
        <DropdownSkill
          :skills="
            Array.from(
              new Set(
                origin_certificates.flatMap((certificate: Certificate) => certificate.skills),
              ),
            )
          "
          v-model:selectedSkill="certificateStore.skillFilter"
          @skillSelected="certificateStore.filter"
        />

        <DropdownOrganization
          :organizations="Object.values(organizationsMap)"
          v-model:selectedOrganization="certificateStore.organizationFilter"
          @organizationSelected="certificateStore.filter"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import DropdownSkill from '@/components/DropdownSkill.vue'
import DropdownOrganization from '@/components/DropdownOrganization.vue'
import {
  certificates as origin_certificates,
  type Certificate,
} from '@/constants/certificateConstants'
import { organizationsMap } from '@/constants/certificateConstants'
import { useCertificateStore } from '@/stores/useCertificateStore'

const certificateStore = useCertificateStore()
</script>

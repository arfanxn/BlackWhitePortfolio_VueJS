<template>
  <section>
    <div class="flex flex-col gap-4 md:gap-4">
      <AFieldIconed
        v-model="certificateStore.keyword"
        @onInput="certificateStore.filter"
        :icon="LuSearch"
        placeholder="Search certificates"
        class="w-full md:w-[50%]"
      />

      <div class="flex flex-row flex-wrap items-center gap-4 md:gap-4">
        <DropdownSkill
          :skills="skills"
          v-model:selectedSkill="certificateStore.skillFilter"
          @skillSelected="certificateStore.filter"
        />

        <DropdownOrganization
          :organizations="organizations"
          v-model:selectedOrganization="certificateStore.organizationFilter"
          @organizationSelected="certificateStore.filter"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AFieldIconed from '@/components/AFieldIconed.vue'
import DropdownSkill from '@/components/certs/CertsFilterDropdownSkill.vue'
import DropdownOrganization from '@/components/certs/CertsFilterDropdownOrganization.vue'
import {
  certificates as origin_certificates,
  type Certificate,
} from '@/constants/certificateConstants'
import { organizationsMap } from '@/constants/certificateConstants'
import { useCertificateStore } from '@/stores/useCertificateStore'
import { LuSearch } from '@kalimahapps/vue-icons'

const certificateStore = useCertificateStore()
const organizations = Object.values(organizationsMap)
const skills = Array.from(
  new Set(origin_certificates.flatMap((certificate: Certificate) => certificate.skills)),
).sort((a, b) => a.name.localeCompare(b.name))
</script>

<template>
  <Layout>
    <main class="flex flex-col main-top-margin gap-y-8 md:gap-y-8">
      <h1 class="font-firacode font-semibold text-2xl md:text-4xl text-white">Certificates</h1>

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

      <section>
        <div>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 list-none">
            <CertificateItem
              v-for="certificate in certificateStore.certificates"
              :key="certificate.name"
              :certificate="certificate"
            />
          </ul>

          <p
            v-if="certificateStore.certificates.length === 0"
            class="font-firacode text-base text-neutral-300"
          >
            No certificates found
          </p>
        </div>
      </section>
    </main>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/Layout.vue'
import SearchBar from '@/components/SearchBar.vue'
import CertificateItem from '@/components/CertificateItem.vue'
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

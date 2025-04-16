<template>
  <div class="relative">
    <AButtonOutlined @click="toggleDropdown">
      <span>Organization{{ certificateQuery.filters.organization ? ':' : '' }}</span>
      <span v-if="certificateQuery.filters.organization">
        {{ certificateQuery.filters.organization }}
      </span>
      <LuChevronDown class="text-xl" />
    </AButtonOutlined>

    <ADropdownSelect
      @close="closeDropdown"
      @optionSelected="certificateStore.queryCertificates"
      :isOpen="isDropdownOpen"
      :options="organizations"
      v-model:selectedOption="certificateQuery.filters.organization"
      class="min-w-[50vw] md:min-w-96"
      selectClass="flex flex-row flex-wrap gap-4"
    >
      <template v-slot:option="{ option: organization, isSelected }">
        <AButtonOutlined
          class="text-sm md:text-base px-2! py-1!"
          :class="[isSelected ? 'bg-neutral-300/25' : '']"
        >
          {{ organization }}
        </AButtonOutlined>
      </template>
    </ADropdownSelect>
  </div>
</template>

<script setup lang="ts">
import AButtonOutlined from '@/components/AButtonOutlined.vue'
import ADropdownSelect from '@/components/ADropdownSelect.vue'
import { LuChevronDown } from '@kalimahapps/vue-icons'
import { useDropdown } from '@/composables/useDropdown'
import { useCertificateStore } from '@/stores/useCertificateStore'
import { storeToRefs } from 'pinia'
import { organizations as origin_organizations } from '@/constants/certificateConstants'

const certificateStore = useCertificateStore()
const { certificateQuery } = storeToRefs(certificateStore)

const organizations = origin_organizations.slice()

const { isDropdownOpen, toggleDropdown, closeDropdown } = useDropdown()
</script>

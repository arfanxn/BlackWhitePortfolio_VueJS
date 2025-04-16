<template>
  <div class="relative">
    <AButtonOutlined @click="toggleDropdown">
      <span>
        <span>Skill</span>
        <span v-if="certificateQuery.filters.skill">:</span>
      </span>
      <AIconTooltipped
        v-if="certificateQuery.filters.skill"
        iconClass="text-xl"
        :icon="certificateQuery.filters.skill.icon"
        :tooltipLabel="certificateQuery.filters.skill.name"
      />
      <LuChevronDown class="text-xl" />
    </AButtonOutlined>

    <ADropdownSelect
      @close="closeDropdown"
      @optionSelected="certificateStore.queryCertificates"
      :isOpen="isDropdownOpen"
      :options="skills"
      v-model:selectedOption="certificateQuery.filters.skill"
      class="min-w-58 md:min-w-58 p-2!"
      selectClass="flex flex-row flex-wrap gap-1"
    >
      <template v-slot:option="{ option: skill, isSelected }">
        <AButtonIcon
          :tooltipLabel="skill.name"
          :icon="skill.icon"
          iconClass="text-2xl!"
          class="rounded-md!"
          :class="[isSelected ? 'bg-neutral-300/25' : '']"
        />
      </template>
    </ADropdownSelect>
  </div>
</template>

<script setup lang="ts">
import AIconTooltipped from '@/components/AIconTooltipped.vue'
import AButtonOutlined from '@/components/AButtonOutlined.vue'
import ADropdownSelect from '@/components/ADropdownSelect.vue'
import { useDropdown } from '@/composables/useDropdown'
import { LuChevronDown } from '@kalimahapps/vue-icons'
import { useCertificateStore } from '@/stores/useCertificateStore'
import { storeToRefs } from 'pinia'
import {
  certificates as origin_certificates,
  type Certificate,
} from '@/constants/certificateConstants'
import AButtonIcon from '../AButtonIcon.vue'

const certificateStore = useCertificateStore()
const { certificateQuery } = storeToRefs(certificateStore)
const skills = Array.from(
  new Set(origin_certificates.flatMap((certificate: Certificate) => certificate.skills)),
).sort((a, b) => a.name.localeCompare(b.name))

const { isDropdownOpen, toggleDropdown, closeDropdown } = useDropdown()
</script>

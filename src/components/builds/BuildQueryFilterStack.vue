<template>
  <div class="relative">
    <AButtonOutlined @click="toggleDropdown">
      <span>
        <span>{{ buildQuery.filters.stacks.length > 1 ? 'Stacks' : 'Stack' }}</span>
        <span v-if="buildQuery.filters.stacks.length > 0">:</span>
      </span>
      <ul class="inline-flex gap-x-2">
        <li v-for="(stack, index) in buildQuery.filters.stacks" :key="index">
          <AIconTooltipped iconClass="text-xl" :icon="stack.icon" :tooltipLabel="stack.name" />
        </li>
      </ul>
      <LuChevronDown class="text-xl" />
    </AButtonOutlined>

    <ADropdownSelect
      @close="closeDropdown"
      @optionsSelected="buildStore.queryBuilds"
      :isOpen="isDropdownOpen"
      :maxSelectCount="3"
      :options="stacks"
      v-model:selectedOptions="buildQuery.filters.stacks"
      class="min-w-58 md:min-w-58 p-2!"
      selectClass="flex flex-row flex-wrap gap-1"
    >
      <template v-slot:option="{ option: stack, isSelected }">
        <AButtonIcon
          :icon="stack.icon"
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
import { storeToRefs } from 'pinia'
import { useBuildStore } from '@/stores/useBuildStore'
import { builds as origin_builds, type Build } from '@/constants/buildConstants'
import { type Stack } from '@/constants/stackConstants'
import AButtonIcon from '../AButtonIcon.vue'

const buildStore = useBuildStore()
const { buildQuery } = storeToRefs(buildStore)
const stacks: Stack[] = Array.from(
  new Set(origin_builds.flatMap((build: Build) => build.stacks)),
).sort((a, b) => a.name.localeCompare(b.name))

const { isDropdownOpen, toggleDropdown, closeDropdown } = useDropdown()
</script>

<template>
  <div>
    <div class="flex flex-col gap-4 md:gap-4">
      <AFieldIconed
        v-model="buildQuery.keyword"
        @onInput="buildStore.queryBuilds"
        :icon="LuSearch"
        placeholder="Search builds"
        class="w-full md:w-[50%]"
      />

      <div class="flex flex-row flex-wrap items-center gap-4 md:gap-4">
        <BuildQueryFilterStack />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AFieldIconed from '@/components/AFieldIconed.vue'
import BuildQueryFilterStack from '@/components/builds/BuildQueryFilterStack.vue'
import { useBuildStore } from '@/stores/useBuildStore'
import { LuSearch } from '@kalimahapps/vue-icons'
import { storeToRefs } from 'pinia'

const buildStore = useBuildStore()
const { buildQuery } = storeToRefs(buildStore)
</script>

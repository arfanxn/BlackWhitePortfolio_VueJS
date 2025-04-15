<template>
  <ADropdown dropdownClass="min-w-[50vw] md:min-w-96 ">
    <template v-slot:button>
      <div class="inline-flex gap-x-0">
        <span>Organization</span>
        <span v-if="selectedOrganization">:</span>
      </div>
      <span>{{ selectedOrganization }}</span>
    </template>

    <template v-slot:dropdown>
      <ul class="flex flex-row flex-wrap gap-4">
        <li v-for="organization in organizations" :key="organization">
          <AButtonOutlined
            @click.stop="() => selectOrganization(organization)"
            class="text-sm md:text-base px-2! py-1!"
            :class="[organization === selectedOrganization ? 'bg-neutral-300/25' : '']"
          >
            {{ organization }}
          </AButtonOutlined>
        </li>
      </ul>
    </template>
  </ADropdown>
</template>

<script setup lang="ts">
import ADropdown from '@/components/ADropdown.vue'
import AButtonOutlined from '@/components/AButtonOutlined.vue'

const emit = defineEmits(['organizationSelected'])

defineProps<{
  organizations: string[]
}>()

const selectedOrganization = defineModel<string | undefined>('selectedOrganization')

const selectOrganization = (organization: string) => {
  selectedOrganization.value =
    selectedOrganization.value === organization ? undefined : organization
  emit('organizationSelected')
}
</script>

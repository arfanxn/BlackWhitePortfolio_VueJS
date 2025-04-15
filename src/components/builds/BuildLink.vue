<template>
  <a :href="url" class="inline-flex items-center gap-x-2 text-neutral-300">
    <component :is="icon" class="text-xl"></component>
    <span class="font-firacode hover:underline text-sm">{{ label }}</span>
  </a>
</template>

<script setup lang="ts">
import { extractGithubRepositoryName, fetchUrlTitle } from '@/helpers/urlHelpers'
import { LuLink, SiGithub, SiGoogledocs, SiGoogledrive } from '@kalimahapps/vue-icons'
import { onMounted, ref, type Component } from 'vue'

type Props = { url: string }
const props = defineProps<Props>()

const label = ref<string>('')
const icon = ref<Component>(LuLink)

interface UrlConfig {
  pattern: RegExp
  icon: Component
  getLabel: (url: string) => Promise<string> | string
}

const urlConfigs: UrlConfig[] = [
  {
    pattern: /^(https?:\/\/)?(www\.)?github\.com\/.+/,
    icon: SiGithub,
    getLabel: (url: string) => extractGithubRepositoryName(url) ?? 'GitHub',
  },
  {
    pattern: /^(https?:\/\/)?(docs\.google\.com\/document\/d\/.+)/,
    icon: SiGoogledocs,
    getLabel: async (url: string) => (await fetchUrlTitle(url)) ?? 'Google Docs',
  },
  {
    pattern: /^(https?:\/\/)?(drive\.google\.com\/file\/d\/.+)/,
    icon: SiGoogledrive,
    getLabel: async (url: string) => (await fetchUrlTitle(url)) ?? 'Google Drive',
  },
  {
    pattern: /.*/,
    icon: LuLink,
    getLabel: async (url: string) => (await fetchUrlTitle(url)) ?? 'Link',
  },
]

onMounted(async () => {
  for (const config of urlConfigs) {
    if (config.pattern.test(props.url)) {
      icon.value = config.icon
      label.value = await config.getLabel(props.url)
      break
    }
  }
})
</script>

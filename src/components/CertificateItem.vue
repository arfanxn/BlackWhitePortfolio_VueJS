<template>
  <li
    class="group/certificate relative flex flex-col rounded-md border border-neutral-300 p-4 hover:border-white"
  >
    <a class="cursor-pointer w-fit block" :href="certificate.url" target="_blank">
      <h3 class="font-firacode font-semibold text-white text-base md:text-lg hover:underline">
        {{ certificate.name }}
      </h3>
    </a>

    <h3 class="mt-0.5 font-firacode text-neutral-300 text-sm md:text-base max-w-1/2 md:max-w-3/4">
      {{ certificate.organization }}
    </h3>

    <time class="mt-0 font-firacode text-sm md:text-base text-neutral-300">
      {{
        `${moment(certificate.issuedAt).format('MM/YYYY')} - ${certificate.expiredAt ? moment(certificate.expiredAt).format('MM/YYYY') : 'Lifetime'}`
      }}
    </time>

    <ul class="mt-2 flex flex-row flex-wrap items-baseline w-full gap-2 list-none">
      <SkillItem
        v-for="skill in certificate.skills"
        :key="skill.name"
        :skill="skill"
        icon-class="text-2xl"
      />
    </ul>

    <div
      class="absolute lg:hidden lg:group-hover/certificate:flex bottom-4 right-4 flex flex-row gap-x-4"
    >
      <button
        @click="showCertificateImage = true"
        class="relative hover:before:absolute hover:before:-inset-2 hover:before:rounded-full hover:before:bg-neutral-300/25"
      >
        <LuEye class="relative text-xl text-neutral-300" />
      </button>
      <a
        class="relative hover:before:absolute hover:before:-inset-2 hover:before:rounded-full hover:before:bg-neutral-300/25"
        :href="certificate.url"
        target="_blank"
      >
        <LuExternalLink class="text-xl text-neutral-300" />
      </a>
    </div>

    <ImagePreviewModal
      :show="showCertificateImage"
      :src="certificate.imageUrl!"
      @close="showCertificateImage = false"
    />
  </li>
</template>

<script setup lang="ts">
import SkillItem from '@/components/SkillItem.vue'
import ImagePreviewModal from '@/components/ImagePreviewModal.vue'
import { LuEye, LuExternalLink } from '@kalimahapps/vue-icons'
import type { Certificate } from '@/constants/certificateConstants'
import moment from 'moment'
import { ref } from 'vue'

defineProps<{ certificate: Certificate }>()
const showCertificateImage = ref<boolean>(false)
</script>

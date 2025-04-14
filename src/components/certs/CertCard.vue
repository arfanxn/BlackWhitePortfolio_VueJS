<template>
  <ACard class="group/certificate">
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
      <li v-for="skill in certificate.skills" :key="skill.name">
        <AIconTooltipped :icon="skill.icon" :tooltipLabel="skill.name" iconClass="text-2xl" />
      </li>
    </ul>

    <div
      class="absolute flex flex-row items-end lg:hidden lg:group-hover/certificate:flex bottom-2 right-2"
    >
      <AButtonIcon @click="showModal" :icon="LuEye" />
      <a class="inline-flex" :href="certificate.url" target="_blank">
        <AButtonIcon :icon="LuExternalLink" />
      </a>
    </div>

    <AImagePreviewModal
      :show="isModalShowed"
      :imageUrl="certificate.imageUrl!"
      @close="closeModal"
    />
  </ACard>
</template>

<script setup lang="ts">
import AIconTooltipped from '@/components/AIconTooltipped.vue'
import AImagePreviewModal from '@/components/AImagePreviewModal.vue'
import AButtonIcon from '@/components/AButtonIcon.vue'
import { LuEye, LuExternalLink } from '@kalimahapps/vue-icons'
import moment from 'moment'
import { type Certificate } from '@/constants/certificateConstants'
import { useModal } from '@/composables/useModal'
import ACard from '../ACard.vue'

defineProps<{ certificate: Certificate }>()

const { isModalShowed, showModal, closeModal } = useModal()
</script>

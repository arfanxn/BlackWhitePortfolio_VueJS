<template>
  <AModal :isOpen="isOpen" modalClass="font-firacode text-neutral-300">
    <!-- Image Section -->
    <figure class="relative w-full rounded-md overflow-hidden">
      <AImage
        :src="build.imageUrls[0]"
        :alt="`${build.title} build image`"
        imgClass="max-w-full min-h-24 aspect-auto object-contain"
      />
      <div
        class="absolute inset-x-0 bottom-0 bg-neutral-300/25 backdrop-blur flex flex-row items-center justify-end p-1 border-t border-neutral-300/25"
      >
        <AButtonIcon
          @click="openImagePreviewModal"
          :icon="LuEye"
          iconClass="text-white! md:text-2xl! "
        />
      </div>
    </figure>

    <!-- Project Details -->
    <section class="space-y-4">
      <header class="space-y-2">
        <h2 class="text-2xl font-bold text-white">
          {{ build.title }}
        </h2>

        <p class="text-base leading-relaxed">
          {{ build.description }}
        </p>
      </header>

      <!-- Tech Stacks -->
      <section>
        <ul class="flex flex-row flex-wrap items-baseline gap-2">
          <li v-for="stack in build.stacks" :key="stack.name">
            <AIconTooltipped :icon="stack.icon" :tooltipLabel="stack.name" iconClass="text-2xl" />
          </li>
        </ul>
      </section>

      <!-- Timeline Section -->
      <section class="space-y-1">
        <h3 class="text-sm font-firacode font-semibold text-white">Timeline</h3>
        <p class="text-sm font-firacode">
          <time>Started {{ formattedStartedAt }} </time>
          <span v-if="build.completedAt" class="block">
            <time>Completed {{ formattedCompletedAt }} ({{ developmentDuration }} days) </time>
          </span>
          <span v-else class="block">Currently in development</span>
        </p>
      </section>

      <!-- Links Section -->
      <section class="space-y-2">
        <h3 class="text-sm font-firacode font-semibold text-white">Links</h3>

        <ul class="space-y-1">
          <!-- Links -->
          <li v-for="url in build.urls" :key="url">
            <BuildLink :url="url" />
          </li>
        </ul>
      </section>
    </section>

    <AImagePreviewModal
      :isOpen="isImagePreviewModalOpen"
      :imageUrls="build.imageUrls"
      @close="closeImagePriviewModal"
    />
  </AModal>
</template>

<script setup lang="ts">
import AModal from '@/components/AModal.vue'
import AImagePreviewModal from '@/components/AImagePreviewModal.vue'
import AIconTooltipped from '@/components/AIconTooltipped.vue'
import AImage from '@/components/AImage.vue'
import BuildLink from '@/components/builds/BuildLink.vue'
import { LuEye } from '@kalimahapps/vue-icons'
import { type Build } from '@/constants/buildConstants'
import { useModal } from '@/composables/useModal'
import moment from 'moment'
import { computed } from 'vue'
import AButtonIcon from '@/components/AButtonIcon.vue'

const props = defineProps<{
  isOpen: boolean
  build: Build
}>()

const {
  isModalOpen: isImagePreviewModalOpen,
  openModal: openImagePreviewModal,
  closeModal: closeImagePriviewModal,
} = useModal()

// Precomputed date formats
const formattedStartedAt = computed(() => moment(props.build.startedAt).format('DD MMMM YYYY'))
const formattedCompletedAt = computed(() =>
  props.build.completedAt ? moment(props.build.completedAt).format('DD MMMM YYYY') : '',
)
const developmentDuration = computed(() =>
  props.build.completedAt
    ? Math.abs(moment(props.build.startedAt).diff(props.build.completedAt, 'days'))
    : 0,
)
</script>

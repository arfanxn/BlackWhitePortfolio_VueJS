<template>
  <ACard @click.stop="openBuildModal" class="group/build">
    <AImage
      figureClass="rounded-md overflow-hidden"
      imgClass="w-full min-h-24 aspect-3/2 object-cover"
      overlayClass="bg-black/25 group-hover/build:bg-transparent transition-colors duration-300"
      :src="build.imageUrls[0]"
      :alt="`${build.title} build image`"
    />

    <header class="mt-2">
      <h3 class="font-firacode font-semibold text-white text-base md:text-lg">
        {{ build.title }}
      </h3>
    </header>

    <section>
      <p
        class="mt-0.5 font-firacode break-words text-neutral-300 text-sm md:text-base text-ellipsis"
      >
        {{ truncatedDescription }}
      </p>
    </section>

    <ADateRange
      :start="build.startedAt"
      :end="build.completedAt ?? 'Present'"
      class="mt-0.5 text-sm md:text-base"
    />

    <section class="mt-2 max-w-[75%] md:max-w-[75%]">
      <ul class="flex flex-row flex-wrap items-baseline w-full gap-2">
        <li v-for="stack in build.stacks" :key="stack.name">
          <AIconTooltipped :icon="stack.icon" :tooltipLabel="stack.name" iconClass="text-2xl" />
        </li>
      </ul>
    </section>

    <div class="absolute lg:hidden lg:group-hover/build:flex bottom-2 right-2">
      <AButtonIcon :icon="LuInfo" @click.stop="openBuildModal" />
    </div>

    <BuildModal :isOpen="isBuildModalOpen" :build="build" @close="closeBuildModal" />
  </ACard>
</template>

<script setup lang="ts">
import ACard from '@/components/ACard.vue'
import AIconTooltipped from '@/components/AIconTooltipped.vue'
import AButtonIcon from '@/components/AButtonIcon.vue'
import ADateRange from '@/components/ADateRange.vue'
import AImage from '@/components/AImage.vue'
import { LuInfo } from '@kalimahapps/vue-icons'
import { computed } from 'vue'
import { type Build } from '@/constants/buildConstants'
import BuildModal from '@/components/builds/BuildModal.vue'
import { useModal } from '@/composables/useModal'

const props = defineProps<{ build: Build }>()

const {
  isModalOpen: isBuildModalOpen,
  openModal: openBuildModal,
  closeModal: closeBuildModal,
} = useModal()

const truncatedDescription = computed(() =>
  props.build.description.length > 100
    ? `${props.build.description.substring(0, 100)}...`
    : props.build.description,
)
</script>

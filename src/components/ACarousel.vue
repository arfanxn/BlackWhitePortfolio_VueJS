<template>
  <div class="relative w-full flex flex-row items-center justify-center">
    <ul class="">
      <li
        v-for="(slide, index) in props.slides"
        :key="index"
        v-show="activeIndex === index"
        class="size-full"
      >
        <slot name="slide" :slide="slide" :index="index" />
      </li>
    </ul>

    <nav
      v-if="slides.length > 1"
      class="absolute z-20 inset-0 flex flex-row items-center justify-between"
    >
      <AButtonIcon @click="prev" :icon="LuChevronLeft" iconClass="text-2xl! md:text-4xl!" />
      <AButtonIcon @click="next" :icon="LuChevronRight" iconClass="text-2xl! md:text-4xl!" />
    </nav>
  </div>
</template>

<script setup lang="ts" generic="T">
import { LuChevronLeft, LuChevronRight } from '@kalimahapps/vue-icons'
import { ref, unref } from 'vue'
import AButtonIcon from './AButtonIcon.vue'

interface Props {
  slides: T[]
}
const props = withDefaults(defineProps<Props>(), {})

const activeIndex = ref(0)

const prev = () => {
  if (unref(activeIndex) == 0) {
    const index = props.slides.length - 1
    activeIndex.value = index
  } else {
    activeIndex.value--
  }
}
const next = () => {
  const lastIndex = props.slides.length - 1
  if (unref(activeIndex) === lastIndex) activeIndex.value = 0
  else activeIndex.value++
}
</script>

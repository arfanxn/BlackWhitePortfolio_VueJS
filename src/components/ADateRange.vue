<template>
  <p class="inline-flex gap-x-1 font-firacode text-neutral-300">
    <time>{{ startStr }}</time>
    <span>-</span>
    <time>{{ endStr }}</time>
  </p>
</template>

<script setup lang="ts">
import moment from 'moment'
import { computed } from 'vue'

type Props = {
  start: Date | string | null
  end: Date | string | null
  format?: string
}
const props = withDefaults(defineProps<Props>(), {
  format: 'MM/YYYY',
})

const startStr = computed(() => {
  const startM = moment(props.start)
  return startM.isValid() ? startM.format(props.format) : props.start
})

const endStr = computed(() => {
  const endM = moment(props.end)
  return endM.isValid() ? endM.format(props.format) : props.end
})
</script>

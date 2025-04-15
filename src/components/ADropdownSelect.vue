<template>
  <ADropdown :isOpen="isOpen">
    <ul :class="[selectClass]">
      <li v-for="(option, index) in options" :key="index" @click="toggleOption(option)">
        <slot
          name="option"
          :option="option"
          :index="index"
          :isSelected="isOptionSelected(option)"
        ></slot>
      </li>
    </ul>
  </ADropdown>
</template>

<script setup lang="ts" generic="T">
import ADropdown from '@/components/ADropdown.vue'
import { onMounted, ref } from 'vue'
import { areJsonObjectsEqual } from '@/utils/booleanUtils'

type Props = {
  isOpen: boolean // whether the dropdown is open
  selectClass?: string // html <select/> or <list/> class
  options: T[] // array of options
  maxSelectCount?: number // maximum number of allowed selected options
}
const props = withDefaults(defineProps<Props>(), {
  maxSelectCount: 1,
})
const emit = defineEmits(['optionsSelected'])

const selectedOptions = ref<T[]>()

onMounted(() => {
  selectedOptions.value = []
})

/**
 * Toggle an option in the selected options array.
 * @param {T} option - The option to toggle.
 * If the selected options array is at the maximum length
 * specified by `maxSelectCount`, and the option
 * is not already selected, remove the first selected option
 * before adding the new option.
 */
const toggleOption = (option: T) => {
  const index = selectedOptions.value!.findIndex((selectedOption) =>
    areJsonObjectsEqual(selectedOption, option),
  )

  if (index === -1) {
    // If the option is not already selected
    if (
      // And if the maximum number of selected options is reached
      props.maxSelectCount &&
      // And the number of selected options is equal to the maximum
      selectedOptions.value!.length >= props.maxSelectCount
    ) {
      // Remove the first selected option
      selectedOptions.value!.splice(0, 1)
    }

    // Add the new option
    selectedOptions.value!.push(option)
  } else {
    // If the option is already selected, remove it
    selectedOptions.value!.splice(index, 1)
  }

  emit('optionsSelected', selectedOptions.value)
}

const isOptionSelected = (option: T) => {
  return selectedOptions.value!.some((selectedOption) =>
    areJsonObjectsEqual(selectedOption, option),
  )
}
</script>

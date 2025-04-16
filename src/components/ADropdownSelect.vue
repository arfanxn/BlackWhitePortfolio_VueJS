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
import { onMounted } from 'vue'
import { areJsonObjectsEqual } from '@/utils/booleanUtils'

// Define the props type for the dropdown component
type Props = {
  isOpen: boolean // Indicates whether the dropdown is currently open
  selectClass?: string // Optional class for the HTML <select/> or <list/> element
  options: T[] // Array of options available for selection
  maxSelectCount?: number // Maximum number of options that can be selected
}

// Define props with default values
const props = withDefaults(defineProps<Props>(), {
  maxSelectCount: 1, // Default to allowing only one selection
})

// Define emitted events for the component
const emit = defineEmits(['optionsSelected', 'optionSelected'])

// Define models for selected options and a single selected option
const selectedOptions = defineModel<T[]>('selectedOptions', { required: false })
const selectedOption = defineModel<T>('selectedOption', { required: false })

// Lifecycle hook to initialize selected options on component mount
onMounted(() => {
  // If the maximum selection count is 1 and no selected option is provided, set the selected option to undefined
  if (props.maxSelectCount === 1 && !selectedOption.value) {
    selectedOption.value = undefined
  }

  // If the maximum selection count is greater than 1 and no selected options are provided, initialize an empty array for the selected options
  else if (props.maxSelectCount > 1 && !selectedOptions.value) {
    selectedOptions.value = []
  }
})

// Function to find the index of a selected option
const findSelectedOptionIndex = (option: T) => {
  return selectedOptions.value!.findIndex(
    (selectedOption) => areJsonObjectsEqual(selectedOption, option), // Compare options using a utility function
  )
}

// Function to check if a specific option is selected
const isOptionSelected = (option: T) => {
  // If maxSelectCount is 1, check against the single selected option
  if (props.maxSelectCount === 1) return areJsonObjectsEqual(selectedOption.value, option)
  // If maxSelectCount is greater than 1, check the index in the selected options
  else return findSelectedOptionIndex(option) >= 0
}

/**
 * Toggles the selection of an option based on the current selection state and the maximum selection count allowed.
 *
 * @param option - The option to be toggled. It is of generic type T.
 *
 * This function handles two scenarios based on the value of `props.maxSelectCount`:
 * 1. If `maxSelectCount` is 1, it allows only a single selection. If the option is already selected, it deselects it; otherwise, it selects the new option.
 * 2. If `maxSelectCount` is greater than 1, it allows multiple selections. It checks if the option is already selected:
 *    - If not selected and the current selection count has reached the maximum, it removes the oldest selected option before adding the new one.
 *    - If already selected, it removes the option from the selection.
 *
 * After modifying the selection, it emits an event 'optionsSelected' with the current list of selected options.
 */
const toggleOption = (option: T) => {
  // Check if the maximum selection count is set to 1
  if (props.maxSelectCount === 1) {
    // If the selected option is the same as the current option, deselect it; otherwise, select the new option
    selectedOption.value = areJsonObjectsEqual(selectedOption.value, option) ? undefined : option

    // Emit the event with the current selected option
    emit('optionSelected', selectedOption.value)
  }

  // Check if the maximum selection count is greater than 1
  if (props.maxSelectCount > 1) {
    // Find the index of the option in the currently selected options
    const index = findSelectedOptionIndex(option)

    // If the option is not currently selected
    if (index === -1) {
      // Check if the maximum selection count has been reached
      if (selectedOptions.value!.length >= props.maxSelectCount) {
        // Remove the oldest selected option to make space for the new one
        selectedOptions.value!.splice(0, 1)
      }

      // Add the new option to the selected options
      selectedOptions.value!.push(option)
    } else {
      // If the option is already selected, remove it from the selection
      selectedOptions.value!.splice(index, 1)
    }

    // Emit the event with the current list of selected options
    emit('optionsSelected', selectedOptions.value)
  }
}
</script>

import { ref } from 'vue'

export const useDropdown = () => {
  const isDropdownOpen = ref(false)
  const isDropdownHovered = ref(false)

  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value
  }

  const closeDropdown = () => {
    isDropdownOpen.value = false
  }

  return {
    isDropdownOpen,
    isDropdownHovered,
    toggleDropdown,
    closeDropdown,
  }
}

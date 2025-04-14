import { ref } from 'vue'

export const useModal = () => {
  const isModalShowed = ref(false)

  const showModal = () => {
    isModalShowed.value = true
  }

  const closeModal = () => {
    isModalShowed.value = false
  }

  const toggleModal = () => {
    isModalShowed.value = !isModalShowed.value
  }

  return {
    isModalShowed,
    showModal,
    closeModal,
    toggleModal,
  }
}

import { useScrollLock } from '@vueuse/core'

export const useBodyScrollLock = () => {
  const isBodyScrollLocked = useScrollLock(document.body)

  const unlockBodyScroll = () => {
    isBodyScrollLocked.value = false
  }

  const lockBodyScroll = () => {
    isBodyScrollLocked.value = true
  }

  const toggleBodyScrollLock = () => {
    isBodyScrollLocked.value = !isBodyScrollLocked.value
  }

  return {
    isBodyScrollLocked,
    unlockBodyScroll,
    lockBodyScroll,
    toggleBodyScrollLock,
  }
}

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
    if (isBodyScrollLocked.value) unlockBodyScroll()
    else lockBodyScroll()
  }

  return {
    isBodyScrollLocked,
    unlockBodyScroll,
    lockBodyScroll,
    toggleBodyScrollLock,
  }
}

import { useBreakpoints } from '@vueuse/core'

const [sm, md, lg, xl] = [640, 768, 1024, 1280]

export const useDeviceBreakpoints = () => {
  const breakpoints = useBreakpoints({
    mobile: sm, // optional
    tablet: md,
    laptop: lg,
    desktop: xl,
  })

  const isMobile = breakpoints.between('mobile', 'tablet')
  const isTablet = breakpoints.between('tablet', 'laptop')
  const isTabletOrLarger = breakpoints.greaterOrEqual('tablet')

  return {
    breakpoints,
    isMobile,
    isTablet,
    isTabletOrLarger,
  }
}

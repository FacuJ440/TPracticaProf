import { useEffect, useState } from "react"

export function useIsMobile(breakpoint: number = 767) {
  const getIsMobile = () => typeof window !== "undefined" && window.matchMedia(`(max-width: ${breakpoint}px)`).matches

  const [isMobile, setIsMobile] = useState(getIsMobile())

  useEffect(() => {
    const handleResize = () => setIsMobile(getIsMobile())
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
    // eslint-disable-next-line
  }, [breakpoint])

  return isMobile
}

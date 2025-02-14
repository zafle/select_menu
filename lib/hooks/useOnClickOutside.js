import { useEffect } from 'react'

/**
 * Hook that executes callback when clicks outside of the passed ref
 */
export default function useOnClickOutside(ref, callback) {
  useEffect(() => {
    /**
     * Execute callback function if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }
    // Bind the event listener
    document.addEventListener('click', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside)
    }
  }, [ref, callback])
}

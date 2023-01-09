import { useEffect, useState, useCallback } from 'react'

const initialTheme = localStorage.getItem('ps-theme') || 'light'

export function useTheme() {
  const [theme, setTheme] = useState(initialTheme)
  const { documentElement } = document

  if (documentElement.getAttribute('ps-theme') === null) {
    documentElement.setAttribute('ps-theme', theme)
  }

  useEffect(() => {
    document.documentElement.setAttribute('ps-theme', theme)
    localStorage.setItem('ps-theme', theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      if (prev === 'dark') {
        return 'light'
      }
      return 'dark'
    })
  }, [])

  return { theme, toggleTheme }
}

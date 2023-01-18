import { useEffect, useState, useCallback } from 'react'

const THEME_KEY = 'data-theme'
const cachedTheme = localStorage.getItem(THEME_KEY)

type Themes = 'light' | 'dark'

export function useTheme(preferredTheme?: Themes) {
  const [theme, setTheme] = useState(cachedTheme ?? preferredTheme)

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute(THEME_KEY, theme)
      localStorage.setItem(THEME_KEY, theme)
    }
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

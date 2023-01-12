import { useEffect, useState, useCallback } from 'react'
import { isThemeValid } from '../hooks/menu/utils'

const cachedTheme = localStorage.getItem('ps-theme')

export function useTheme(preferredTheme?: 'light' | 'dark') {
  const themes = {
    light: 'light',
    dark: 'dark',
  }

  const getInitialTheme = () => {
    if (
      preferredTheme &&
      isThemeValid(preferredTheme) &&
      cachedTheme === null
    ) {
      return themes[preferredTheme]
    }
    return cachedTheme || themes.light
  }

  const initialTheme = getInitialTheme()
  const [theme, setTheme] = useState(initialTheme)
  const { documentElement } = document

  if (documentElement.getAttribute('ps-theme') === null && theme !== null) {
    documentElement.setAttribute('ps-theme', theme)
  }

  useEffect(() => {
    if (isThemeValid(theme)) {
      document.documentElement.setAttribute('ps-theme', theme)
      localStorage.setItem('ps-theme', theme)
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev: string) => {
      if (prev === 'dark') {
        return 'light'
      }
      return 'dark'
    })
  }, [])

  return { theme, toggleTheme }
}

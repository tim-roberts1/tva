import { isThemeValid } from './utils'

describe('isThemeValid', () => {
  it('should return true for dark theme', () => {
    expect(isThemeValid('dark')).toBe(true)
  })

  it('should return true for light theme', () => {
    expect(isThemeValid('light')).toBe(true)
  })

  it('should return false if the theme is an invalid string', () => {
    expect(isThemeValid('invalid')).toBe(false)
  })

  it('should return false if the theme is null', () => {
    // @ts-expect-error
    expect(isThemeValid(null)).toBe(false)
  })

  it('should return false if the theme is undefined', () => {
    // @ts-expect-error
    expect(isThemeValid(undefined)).toBe(false)
  })
})

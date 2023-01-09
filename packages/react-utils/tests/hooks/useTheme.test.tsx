import { render, screen, userEvent } from 'test-utils'
import { useTheme } from '../../src'

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  function TestComponent() {
    const { toggleTheme } = useTheme()
    return (
      <button type="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
    )
  }

  function setup() {
    const user = userEvent.setup()

    render(<TestComponent />)
    const button = screen.getByRole('button', { name: /toggle theme/i })

    return { user, button }
  }

  test('should set the theme to light', () => {
    render(<TestComponent />)
    expect(document.documentElement).toHaveAttribute('ps-theme', 'light')
  })

  test('should set the theme to dark', async () => {
    const { user, button } = setup()
    await user.click(button)
    expect(document.documentElement).toHaveAttribute('ps-theme', 'dark')
  })

  test('should set the theme back to light when it is already set to dark', async () => {
    const { user, button } = setup()
    await user.click(button)
    await user.click(button)
    expect(document.documentElement).toHaveAttribute('ps-theme', 'light')
  })

  test('should persist the theme in local storage when it is changed to dark', async () => {
    const { user, button } = setup()
    await user.click(button)
    expect(localStorage.getItem('ps-theme')).toBe('dark')
    expect(document.documentElement).toHaveAttribute('ps-theme', 'dark')
  })

  test('should persist the theme in local storage when it is changed to light', async () => {
    const { user, button } = setup()
    await user.click(button)
    await user.click(button)
    expect(localStorage.getItem('ps-theme')).toBe('light')
    expect(document.documentElement).toHaveAttribute('ps-theme', 'light')
  })

  test('should set the theme to light when the document element does not have a ps-theme attribute', () => {
    document.documentElement.removeAttribute('ps-theme')
    render(<TestComponent />)
    expect(document.documentElement).toHaveAttribute('ps-theme', 'light')
  })

  test('should set the theme to light if the document element has an invalid ps-theme attribute', () => {
    document.documentElement.setAttribute('ps-theme', 'invalid')
    render(<TestComponent />)
    expect(document.documentElement).toHaveAttribute('ps-theme', 'light')
  })
})

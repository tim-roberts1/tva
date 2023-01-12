import { render, screen, userEvent } from 'test-utils'
import { useTheme } from '../../src'

describe('useTheme', () => {
  // Todo: getting act warnings
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

  test('should be dark theme if the useTheme hook is provided an inital value of dark', () => {
    const TestComponent = () => {
      const { theme } = useTheme('dark')
      return (
        <div>
          <div data-testid="theme">{theme}</div>
        </div>
      )
    }
    render(<TestComponent />)
    expect(screen.getByTestId('theme')).toHaveTextContent('dark')
  })

  test('should be light theme if the useTheme hook is provided an inital value of light', () => {
    const TestComponent = () => {
      const { theme } = useTheme('light')
      return (
        <div>
          <div data-testid="theme">{theme}</div>
        </div>
      )
    }
    render(<TestComponent />)
    expect(screen.getByTestId('theme')).toHaveTextContent('light')
  })

  test('should be light theme if the useTheme hook is provided an inital value that is invalid', () => {
    const TestComponent = () => {
      // @ts-expect-error
      const { theme } = useTheme('invalid')
      return (
        <div>
          <div data-testid="theme">{theme}</div>
        </div>
      )
    }
    render(<TestComponent />)
    expect(screen.getByTestId('theme')).toHaveTextContent('light')
  })
})

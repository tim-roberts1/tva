import { render, screen, userEvent } from 'test-utils'
import { useAutoFormatDate } from '../../src'

describe('useAutoFormatDate', () => {
  function Input() {
    const props = useAutoFormatDate()
    return (
      <div>
        <label htmlFor="birth">Birthdate</label>
        <input id="birth" type="text" {...props} />
      </div>
    )
  }

  test('should display an input with a placeholder', () => {
    render(<Input />)
    expect(screen.getByRole('textbox', { name: /birthdate/i })).toHaveAttribute(
      'placeholder',
      'MM/DD/YYYY'
    )
  })

  test('should auto-format text when entered', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const input = screen.getByRole('textbox', { name: /birthdate/i })

    await user.click(input)
    await user.keyboard('02042000')

    expect(input).toHaveValue('02/04/2000')
  })

  test('should allow day editing', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const input = screen.getByRole('textbox', { name: /birthdate/i })

    await user.click(input)
    await user.keyboard('02042000')
    await user.keyboard('[Backspace][Backspace][Backspace][Backspace]')
    await user.keyboard(
      '[ArrowLeft][Backspace][Backspace][Backspace][Backspace]'
    )
    await user.keyboard('3')
    await user.keyboard('4')

    expect(input).toHaveValue('03/04/')
  })
})

import { getIconButtonProps } from '../../src'

describe('Icon Button CSS', () => {
  describe('getIconButtonProps', () => {
    const baseClass = 'ps-icon-btn'
    const result = {
      button: {
        'aria-label': 'button',
        className: `${baseClass} text mIconButton `,
        type: 'button',
      },
      iconOptions: {
        size: 'm',
        ariaHidden: 'true',
      },
    }

    test('should accept an ariaLabel argument', () => {
      expect(getIconButtonProps({ ariaLabel: 'button' })).toEqual(result)
    })

    test('should accept a kind type', () => {
      expect(getIconButtonProps({ ariaLabel: 'button', kind: 'text' })).toEqual(
        result
      )
      expect(
        getIconButtonProps({ ariaLabel: 'button', kind: 'textWeak' })
      ).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} textWeak mIconButton `,
        },
        iconOptions: result.iconOptions,
      })
      expect(getIconButtonProps({ ariaLabel: 'button', kind: 'weak' })).toEqual(
        {
          button: {
            ...result.button,
            className: `${baseClass} weak mIconButton `,
          },
          iconOptions: result.iconOptions,
        }
      )
      expect(
        getIconButtonProps({ ariaLabel: 'button', kind: 'medium' })
      ).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} medium mIconButton `,
        },
        iconOptions: result.iconOptions,
      })
      expect(
        getIconButtonProps({ ariaLabel: 'button', kind: 'strong' })
      ).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} strong mIconButton `,
        },
        iconOptions: result.iconOptions,
      })
    })

    test('should accept a size type', () => {
      expect(getIconButtonProps({ ariaLabel: 'button', size: 'm' })).toEqual(
        result
      )
      expect(getIconButtonProps({ ariaLabel: 'button', size: 'xs' })).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} text xsIconButton `,
        },
        iconOptions: {
          ...result.iconOptions,
          size: 's',
        },
      })
      expect(getIconButtonProps({ ariaLabel: 'button', size: 's' })).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} text sIconButton `,
        },
        iconOptions: result.iconOptions,
      })
      expect(getIconButtonProps({ ariaLabel: 'button', size: 'l' })).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} text lIconButton `,
        },
        iconOptions: {
          ...result.iconOptions,
          size: 'l',
        },
      })
    })

    test('should accept a tech type', () => {
      expect(
        getIconButtonProps({ ariaLabel: 'button', tech: 'svelte' })
      ).toEqual({
        button: {
          'aria-label': 'button',
          class: 'base text mIconButton ',
        },
        iconOptions: result.iconOptions,
      })
    })

    test('should accept a round flag', () => {
      expect(getIconButtonProps({ ariaLabel: 'button', round: true })).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} text mIconButton circle`,
        },
        iconOptions: result.iconOptions,
      })
    })
  })
})

import { getAvatarLabelProps } from '../../src'

describe('Avatar Label', () => {
  const baseClass = 'pando-avatar'
  const name = 'John Doe'
  const value = 'JD'

  test('should return a xs label props object', () => {
    expect(
      getAvatarLabelProps({
        name,
        size: 'xs',
      })
    ).toEqual({
      'aria-label': name,
      className: `${baseClass}-label pando_avatarLabel pando_xsAvatarLabel`,
      value,
    })
  })

  test('should return a s label props object', () => {
    expect(
      getAvatarLabelProps({
        name,
        size: 's',
      })
    ).toEqual({
      'aria-label': name,
      className: `${baseClass}-label pando_avatarLabel pando_sAvatarLabel`,
      value,
    })
  })

  test('should return a m label props object', () => {
    expect(
      getAvatarLabelProps({
        name,
        size: 'm',
      })
    ).toEqual({
      'aria-label': name,
      className: `${baseClass}-label pando_avatarLabel pando_mAvatarLabel`,
      value,
    })
  })

  test('should return a l label props object', () => {
    expect(
      getAvatarLabelProps({
        name,
        size: 'l',
      })
    ).toEqual({
      'aria-label': name,
      className: `${baseClass}-label pando_avatarLabel pando_lAvatarLabel`,
      value,
    })
  })

  test('should return a xl label props object', () => {
    expect(
      getAvatarLabelProps({
        name,
        size: 'xl',
      })
    ).toEqual({
      'aria-label': name,
      className: `${baseClass}-label pando_avatarLabel pando_xlAvatarLabel`,
      value,
    })
  })
})

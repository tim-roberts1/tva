import { getCircularProgressProps } from '../../src'

describe('CircularProgress CSS', () => {
  const baseClass = 'pando-circular-progress'
  const ariaLabel = 'circular progress test'
  const a11yProps = {
    'aria-label': ariaLabel,
    'aria-valuemax': 100,
    'aria-valuemin': 0,
    'aria-valuenow': 0,
    role: 'progressbar',
  }
  const result = {
    containerProps: {
      ...a11yProps,
      className: `${baseClass} pando_circularProgressBase`,
    },
    svgBoxProps: {
      className: `${baseClass}-box pando_mCircularProgress pando_determinateCircularProgress`,
      viewBox: '0 0 100 100',
    },
    baseCircleProps: {
      className: `${baseClass}-base pando_circularProgressCircle`,
      cx: '50',
      cy: '50',
      r: '42',
      strokeWidth: '12px',
    },
    nowCircleProps: {
      className: `${baseClass}-now pando_circularProgressCircleNow pando_determinateCircularProgress`,
      cx: '50',
      cy: '50',
      r: '42',
      strokeWidth: '12px',
      strokeDashoffset: '66',
      strokeDasharray: '0 264',
    },
    labelProps: {
      className: `${baseClass}-label pando_circularProgressText`,
      value: '0%',
    },
  }

  test('should accept an ariaLabel', () => {
    expect(getCircularProgressProps({ ariaLabel: 'test aria label' })).toEqual({
      ...result,
      containerProps: {
        ...result.containerProps,
        'aria-label': 'test aria label',
      },
    })
  })

  test('should accept a kind type', () => {
    expect(
      getCircularProgressProps({
        ariaLabel: ariaLabel,
        kind: 'determinate',
      })
    ).toEqual(result)
    expect(
      getCircularProgressProps({ ariaLabel, kind: 'indeterminate' })
    ).toEqual({
      ...result,
      containerProps: {
        'aria-label': ariaLabel,
        role: 'status',
        className: `${baseClass} pando_circularProgressBase`,
      },
      svgBoxProps: {
        ...result.svgBoxProps,
        className: `${baseClass}-box pando_mCircularProgress pando_indeterminateCircularProgress`,
      },
      nowCircleProps: {
        ...result.nowCircleProps,
        className: `${baseClass}-now pando_circularProgressCircleNow pando_indeterminateCircularProgress`,
      },
    })
  })

  test('should accept a xs size type', () => {
    expect(getCircularProgressProps({ ariaLabel, size: 'xs' })).toEqual({
      ...result,
      svgBoxProps: {
        ...result.svgBoxProps,
        className: `${baseClass}-box pando_xsCircularProgress pando_determinateCircularProgress`,
      },
    })
  })

  test('should accept a m size type', () => {
    expect(getCircularProgressProps({ ariaLabel, size: 'm' })).toEqual({
      ...result,
      svgBoxProps: {
        ...result.svgBoxProps,
        className: `${baseClass}-box pando_mCircularProgress pando_determinateCircularProgress`,
      },
    })
  })

  test('should accept a list of classNames', () => {
    expect(
      getCircularProgressProps({
        ariaLabel,
        classNames: ['test', 'test2'],
      })
    ).toEqual({
      ...result,
      containerProps: {
        ...result.containerProps,
        className: `${baseClass} pando_circularProgressBase test test2`,
      },
    })
  })
})

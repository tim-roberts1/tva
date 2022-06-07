import { getCircularProgressProps } from '../../src'

describe('CircularProgress CSS', () => {
  describe('getCircularProgressProps', () => {
    const baseClass = 'ps-circular-progress'
    const a11yProps = {
      'aria-valuemax': 100,
      'aria-valuemin': 0,
      'aria-valuenow': 0,
      role: 'progressbar',
    }
    const result = {
      containerProps: {
        ...a11yProps,
        className: `${baseClass} base`,
      },
      svgBoxProps: {
        className: `${baseClass}-box mSize determinate`,
        viewBox: '0 0 100 100',
      },
      baseCircleProps: {
        className: `${baseClass}-base circle`,
        cx: '50',
        cy: '50',
        r: '42',
        strokeWidth: '12px',
      },
      nowCircleProps: {
        className: `${baseClass}-now circleNow determinate`,
        cx: '50',
        cy: '50',
        r: '42',
        strokeWidth: '12px',
        strokeDashoffset: '66',
        strokeDasharray: '0 264',
      },
      labelProps: {
        className: `${baseClass}-label text`,
        value: '0%',
      },
    }

    test('should allow no props to be passed in', () => {
      expect(getCircularProgressProps()).toEqual(result)
    })

    test('should accept a kind type', () => {
      expect(getCircularProgressProps({ kind: 'determinate' })).toEqual(result)
      expect(getCircularProgressProps({ kind: 'indeterminate' })).toEqual({
        ...result,
        containerProps: {
          role: 'progressbar',
          className: `${baseClass} base`,
        },
        svgBoxProps: {
          ...result.svgBoxProps,
          className: `${baseClass}-box mSize indeterminate`,
        },
        nowCircleProps: {
          ...result.nowCircleProps,
          className: `${baseClass}-now circleNow indeterminate`,
        },
      })
    })

    test('should accept a tech type', () => {
      const baseCircleProps = {
        cx: '50',
        cy: '50',
        r: '42',
        'stroke-width': '12px',
      }

      expect(
        getCircularProgressProps({ tech: 'svelte', now: 60, size: 'xs' })
      ).toEqual({
        containerProps: {
          'aria-valuemax': 100,
          'aria-valuemin': 0,
          'aria-valuenow': 60,
          role: 'progressbar',
          class: `${baseClass} base`,
        },
        svgBoxProps: {
          class: `${baseClass}-box box xsSize determinate`,
          viewBox: '0 0 100 100',
        },
        baseCircleProps: {
          ...baseCircleProps,
          class: `${baseClass}-base circle`,
        },
        nowCircleProps: {
          ...baseCircleProps,
          class: `${baseClass}-now circleNow determinate`,
          'stroke-dashoffset': '66',
          'stroke-dasharray': '158.4 105.6',
        },
        labelProps: {
          class: `${baseClass}-label text`,
          value: '60%',
        },
      })
    })
  })
})

const squareViewBox = require('../../utils/squareViewBox.cjs')

describe('squareViewBox', () => {
  test('should not change a square viewBox', () => {
    const visitor = squareViewBox.fn()

    const parentNode = {
      type: 'root',
    }

    let node = {
      name: 'svg',
      attributes: {
        viewBox: '0 0 24 24',
      },
    }

    visitor.element.enter(node, parentNode)

    expect(node).toEqual({
      name: 'svg',
      attributes: {
        viewBox: '0 0 24 24',
      },
    })
  })

  test('should square and offset a vertically rectangular viewBox', () => {
    const visitor = squareViewBox.fn()

    const parentNode = {
      type: 'root',
    }

    let node = {
      name: 'svg',
      attributes: {
        viewBox: '0 0 12 24',
      },
    }

    visitor.element.enter(node, parentNode)

    expect(node).toEqual({
      name: 'svg',
      attributes: {
        viewBox: '-6 0 24 24',
      },
    })
  })

  test('should square and offset a horizontally rectangular viewBox', () => {
    const visitor = squareViewBox.fn()

    const parentNode = {
      type: 'root',
    }

    let node = {
      name: 'svg',
      attributes: {
        viewBox: '0 0 24 12',
      },
    }

    visitor.element.enter(node, parentNode)

    expect(node).toEqual({
      name: 'svg',
      attributes: {
        viewBox: '0 -6 24 24',
      },
    })
  })

  test('should preserve existing offsets', () => {
    const visitor = squareViewBox.fn()

    const parentNode = {
      type: 'root',
    }

    let node = {
      name: 'svg',
      attributes: {
        viewBox: '-1 0 12 24',
      },
    }

    visitor.element.enter(node, parentNode)

    expect(node).toEqual({
      name: 'svg',
      attributes: {
        viewBox: '-7 0 24 24',
      },
    })
  })
  test('should ignore SVGs without viewBox', () => {
    const visitor = squareViewBox.fn()

    const parentNode = {
      type: 'root',
    }

    let node = {
      name: 'svg',
      attributes: {},
    }

    expect(function () {
      visitor.element.enter(node, parentNode)
    }).not.toThrow()

    expect(node).toEqual({
      name: 'svg',
      attributes: {},
    })
  })
})

const addAriaLabel = require('../../../src/utils/svgo/addAriaLabel.js')

describe('addAriaLabel', () => {
  test('should not overwrite existing aria-label by default', () => {
    const root = null
    const params = {
      useFilename: true,
    }
    const source = {
      path: 'path/to/my-custom-icon.svg',
    }
    const visitor = addAriaLabel.fn(root, params, source)

    const parentNode = {
      type: 'root',
    }

    let node = {
      name: 'svg',
      attributes: {
        'aria-label': 'unchanged',
      },
    }

    visitor.element.enter(node, parentNode)

    expect(node).toEqual({
      name: 'svg',
      attributes: {
        'aria-label': 'unchanged',
      },
    })
  })

  test('should overwrite existing aria-label when instructed', () => {
    const root = null
    const params = {
      useFilename: true,
      overwrite: true,
    }
    const source = {
      path: 'path/to/my-custom-icon.svg',
    }
    const visitor = addAriaLabel.fn(root, params, source)

    const parentNode = {
      type: 'root',
    }

    let node = {
      name: 'svg',
      attributes: {
        'aria-label': 'unchanged',
      },
    }

    visitor.element.enter(node, parentNode)

    expect(node).toEqual({
      name: 'svg',
      attributes: {
        'aria-label': 'my custom icon',
      },
    })
  })

  test('should convert sets of non-alphanumeric characters to spaces', () => {
    const root = null
    const params = {
      useFilename: true,
    }
    const source = {
      path: 'path/to/my-custom__icon@800.svg',
    }
    const visitor = addAriaLabel.fn(root, params, source)

    const parentNode = {
      type: 'root',
    }

    let node = {
      name: 'svg',
      attributes: {},
    }

    visitor.element.enter(node, parentNode)

    expect(node).toEqual({
      name: 'svg',
      attributes: {
        'aria-label': 'my custom icon 800',
      },
    })
  })

  test('should convert camelCase names to sentence case', () => {
    const root = null
    const params = {
      useFilename: true,
    }
    const source = {
      path: 'path/to/camelCaseFile.svg',
    }
    const visitor = addAriaLabel.fn(root, params, source)

    const parentNode = {
      type: 'root',
    }

    let node = {
      name: 'svg',
      attributes: {},
    }

    visitor.element.enter(node, parentNode)

    expect(node).toEqual({
      name: 'svg',
      attributes: {
        'aria-label': 'camel case file',
      },
    })
  })

  test('should prepend a prefix when instructed', () => {
    const root = null
    const params = {
      prefix: 'icon: ',
      useFilename: true,
    }
    const source = {
      path: 'path/to/my-icon.svg',
    }
    const visitor = addAriaLabel.fn(root, params, source)

    const parentNode = {
      type: 'root',
    }

    let node = {
      name: 'svg',
      attributes: {},
    }

    visitor.element.enter(node, parentNode)

    expect(node).toEqual({
      name: 'svg',
      attributes: {
        'aria-label': `${params.prefix}my icon`,
      },
    })
  })

  test('should append a suffix when instructed', () => {
    const root = null
    const params = {
      suffix: ' icon',
      useFilename: true,
    }
    const source = {
      path: 'path/to/my-file.svg',
    }
    const visitor = addAriaLabel.fn(root, params, source)

    const parentNode = {
      type: 'root',
    }

    let node = {
      name: 'svg',
      attributes: {},
    }

    visitor.element.enter(node, parentNode)

    expect(node).toEqual({
      name: 'svg',
      attributes: {
        'aria-label': `my file${params.suffix}`,
      },
    })
  })
})

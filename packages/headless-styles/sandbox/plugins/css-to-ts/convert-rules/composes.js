export default function composes(styleObj) {
  for (const [className, value] of Object.entries(styleObj)) {
    if (typeof value !== 'object') {
      styleObj[className] = value
      continue
    }

    const { composes, ...overrides } = value
    styleObj[className] = {}

    if (composes) {
      if (composes in styleObj) {
        deepMerge(styleObj[className], styleObj[composes])
      } else if (composes.includes(' from ')) {
        // Need to extract this Object and merge here not later.
        deepMerge(styleObj[className], value)
      } else {
        composes.split(/\s+/).forEach((otherKey) => {
          deepMerge(styleObj[className], styleObj[otherKey])
        })
      }
    }
    deepMerge(styleObj[className], overrides)
  }

  return styleObj
}

function deepMerge(source, target) {
  for (const [key, value] of Object.entries(target)) {
    // Overwrite primitive values, merge objects together
    if (key in source && typeof value === 'object') {
      deepMerge(source[key], value)
    } else if (typeof value === 'object') {
      source[key] = { ...value }
    } else {
      source[key] = value
    }
  }
}

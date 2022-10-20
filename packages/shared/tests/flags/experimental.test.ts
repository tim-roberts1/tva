import * as flags from '../../src/featureFlags'

describe('experimental feature flags', () => {
  test('should be true for experimental features', () => {
    // we have to have at least one passing test for TS
    expect(flags.table).toEqual(true)
  })
})

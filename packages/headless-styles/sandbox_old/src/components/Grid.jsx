import { getGridProps, getGridItemProps } from '@pluralsight/headless-styles'

function getGridItemStyles() {
  return {
    backgroundColor: 'var(--ps-surface-strong)',
  }
}

function TwoColLayout() {
  return (
    <div
      {...getGridProps({
        areas: ['header header', 'nav main', 'nav footer'],
        cols: '12',
        gap: 6,
        rows: '5rem 1fr 3rem',
        style: {
          height: '30rem',
        },
      })}
    >
      <div
        {...getGridItemProps({
          area: 'header',
          colSpan: 'auto / span 12',
          style: getGridItemStyles(),
        })}
      >
        Header
      </div>
      <div
        {...getGridItemProps({
          area: 'nav',
          colSpan: 'auto / span 3',
          style: getGridItemStyles(),
        })}
      >
        Nav
      </div>
      <div
        {...getGridItemProps({
          area: 'main',
          colSpan: 'auto / span 9',
          style: getGridItemStyles(),
        })}
      >
        Main
      </div>
      <div
        {...getGridItemProps({
          area: 'footer',
          colSpan: 'auto / span 12',
          style: getGridItemStyles(),
        })}
      >
        Footer
      </div>
    </div>
  )
}

export default function Grid() {
  return (
    <div>
      <h3>Grid</h3>
      <div className="App-container">
        <TwoColLayout />
      </div>
    </div>
  )
}

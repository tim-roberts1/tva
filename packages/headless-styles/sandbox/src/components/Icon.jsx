import { getIconProps, getJSIconProps } from '../../../src'
import { PluralsightIcon } from '@pluralsight/icons'

export default function Icon(props) {
  if (props.logJS) {
    console.log({ ...getJSIconProps({ size: 's' }) })
  }

  return (
    <div id="icon">
      <h3>Icon</h3>
      <div className="App-container">
        <PluralsightIcon {...getIconProps({ label: 'small', size: 's' })} />
        <PluralsightIcon
          {...getIconProps({ label: 'medium (default)', size: 'm' })}
        />
        <PluralsightIcon {...getIconProps({ label: 'large', size: 'l' })} />
      </div>
    </div>
  )
}

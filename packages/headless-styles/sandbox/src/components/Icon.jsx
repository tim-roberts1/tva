import { getIconProps, getJSIconProps } from '../../../src'

function PSIcon(props) {
  return (
    <svg
      aria-label="pluralsight logo"
      viewBox="0 0 20 20"
      role="img"
      fill="currentColor"
      className="ps-icon-svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 7.203 5.312 5.937v8.125L7.5 12.797v2.437L16.473 10 7.5 4.766v2.437Zm0 1.083-1.25-.723v4.874l1.25-.723V8.286Zm.938 2.886V8.828L10.463 10l-2.025 1.172Zm0 1.083L12.335 10 8.437 7.745V6.398L14.614 10l-6.175 3.602v-1.347Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm0-.938A9.062 9.062 0 1 0 10 .939a9.062 9.062 0 0 0 0 18.125Z"
      />
    </svg>
  )
}

export default function Icon(props) {
  if (props.logJS) {
    console.log({ ...getJSIconProps({ size: 'xs' }) })
  }

  return (
    <div id="icon">
      <h3>Icon</h3>
      <div className="App-container">
        <PSIcon {...getIconProps({ label: 'extra small', size: 'xs' })} />
        <PSIcon {...getIconProps({ label: 'small', size: 's' })} />
        <PSIcon {...getIconProps({ label: 'medium (default)', size: 'm' })} />
        <PSIcon {...getIconProps({ label: 'large', size: 'l' })} />
      </div>
    </div>
  )
}

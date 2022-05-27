import { getIconButtonProps, getIconProps } from '../../../src'
import { CodeIcon } from '@pluralsight/icons'

function PSIconButton(props) {
  const { button, iconOptions } = getIconButtonProps(props)

  return (
    <button {...button}>
      <CodeIcon {...getIconProps(iconOptions)} />
    </button>
  )
}

export default function IconButton() {
  // if (props.logJS) {
  //   console.log({ ...getJSIconButtonProps({ ariaLabel: 'button', kind: 'medium', size: 'xs', round: true }) })
  // }

  return (
    <div id="icon-button">
      <h3>Icon Button</h3>
      <div className="App-container">
        <PSIconButton ariaLabel="default" />
        <PSIconButton ariaLabel="textWeak" kind="textWeak" />
        <PSIconButton ariaLabel="weak" kind="weak" />
        <PSIconButton ariaLabel="medium" kind="medium" />
        <PSIconButton ariaLabel="strong" kind="strong" />
      </div>
      <div className="App-container">
        <PSIconButton ariaLabel="extra small" kind="medium" size="xs" />
        <PSIconButton ariaLabel="small" kind="medium" size="s" />
        <PSIconButton ariaLabel="medium" kind="medium" size="m" />
        <PSIconButton ariaLabel="large" kind="medium" size="l" />
      </div>
      <h3>Round Icon Button</h3>
      <div className="App-container">
        <PSIconButton ariaLabel="default round" round={true} />
        <PSIconButton ariaLabel="textWeak round" kind="textWeak" round={true} />
        <PSIconButton ariaLabel="weak round" kind="weak" round={true} />
        <PSIconButton ariaLabel="medium round" kind="medium" round={true} />
        <PSIconButton ariaLabel="strong round" kind="strong" round={true} />
      </div>
      <div className="App-container">
        <PSIconButton
          ariaLabel="extra small round"
          kind="medium"
          size="xs"
          round={true}
        />
        <PSIconButton
          ariaLabel="small round"
          kind="medium"
          size="s"
          round={true}
        />
        <PSIconButton
          ariaLabel="medium round"
          kind="medium"
          size="m"
          round={true}
        />
        <PSIconButton
          ariaLabel="large round"
          kind="medium"
          size="l"
          round={true}
        />
      </div>
    </div>
  )
}

import React from 'react'
import CodeBlock from '@theme/CodeBlock'

const selectPreview = (
  <CodeBlock>{`import {
  getFormControlProps,
  getFormLabelProps,
  getSelectProps,
  getSelectOptionProps,
  getIconProps,
} from '@pluralsight/headless-styles'
import { ChevronDownIcon } from '@pluralsight/icons'

export function Option(props) {
  const { value, label, ...restProps } = props
  const optionProps = getSelectOptionProps({ value })

  return (
    <option {...restProps} {...optionProps}>
      {label}
    </option>
  )
}

export default function Select(props) {
  const { fieldOptions } = getFormControlProps({
    invalid: props.invalid,
    disabled: props.disabled,
    required: props.required,
  })
  const selectLabel = getFormLabelProps({
    htmlFor: props.id,
    required: props.required,
    value: props.label,
  })
  const selectProps = getSelectProps({
    ...fieldOptions,
    id: props.id,
    name: props.name,
    size: props.size,
    value: props.value,
  })
  const iconProps = getIconProps(selectProps.iconOptions)

  return (
    <div {...selectProps.fieldWrapper}>
      <label {...selectLabel}>{selectLabel.value}</label>
      <div {...selectProps.selectWrapper}>
        <select {...selectProps.select} onChange={props.onChange}>
          {props.placeholder && (
            <Option hidden disabled value="" label={props.placeholder} />
          )}
          {props.options.map((value) => (
            <Option key={value} value={value} label={value} />
          ))}
        </select>
        <span {...selectProps.iconWrapper}>
          <ChevronDownIcon {...iconProps} />
        </span>
      </div>
    </div>
  )
}`}</CodeBlock>
)

export default selectPreview

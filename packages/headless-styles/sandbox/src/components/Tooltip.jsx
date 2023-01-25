import { useState, useCallback, useEffect } from 'react'
import { useEscToClose } from '@pluralsight/react-utils'
import { getTooltipProps, getJSTooltipProps } from '../../../src'
import positions from '../data/tooltipPositions.data.json'
import SimpleGrid from './SimpleGrid'

function TooltipEl(props) {
  const [disabled, setDisabled] = useState(false)

  const tooltipProps = getTooltipProps({
    id: props.id,
    position: props.position,
    disabled: disabled,
  })

  const disable = useCallback(() => {
    setDisabled(true)
  }, [])

  function enable() {
    setDisabled(false)
  }

  useEscToClose(disable)

  return (
    <div {...tooltipProps.wrapper} onMouseEnter={enable} onFocus={enable}>
      <div {...tooltipProps.trigger}>{props.children}</div>
      <div {...tooltipProps.tooltip}>
        <div {...tooltipProps.tooltipContent}>
          Sample tooltip text goes here.
        </div>
      </div>
    </div>
  )
}

function TooltipJS(props) {
  const [disabled, setDisabled] = useState(false)
  const [tooltipStyle, setTooltipStyle] = useState({})
  const [triggerStyle, setTriggerStyle] = useState({})

  const tooltipProps = getJSTooltipProps({
    id: props.id,
    position: props.position,
    disabled: disabled,
  })

  const disable = useCallback(() => {
    setDisabled(true)
  }, [])

  function enable() {
    setDisabled(false)
  }

  function show() {
    if (!disabled) {
      setTooltipStyle({
        ...tooltipProps.tooltip.styles,
        ...tooltipProps.tooltip.styles["&:not([data-disabled='true']):hover"],
        opacity: 1,
      })
    }
  }

  function hide() {
    if (!disabled) {
      setTooltipStyle(tooltipProps.tooltip.styles)
    }
  }

  function focus() {
    show()
    setTriggerStyle({
      ...tooltipProps.trigger.styles,
      ...tooltipProps.trigger.styles['&:focus'],
    })
  }

  function blur() {
    hide()
    setTriggerStyle(tooltipProps.trigger.styles)
  }

  useEscToClose(disable)

  useEffect(() => {
    setTooltipStyle(tooltipProps.tooltip.styles)
    setTriggerStyle(tooltipProps.trigger.styles)
  }, [])

  return (
    <div
      style={tooltipProps.wrapper.styles}
      onMouseEnter={enable}
      onFocus={enable}
      onMouseOver={show}
      onMouseLeave={hide}
      {...tooltipProps.wrapper.a11yProps}
    >
      <div
        style={triggerStyle}
        onFocus={focus}
        onBlur={blur}
        {...tooltipProps.trigger.a11yProps}
      >
        {props.children}
      </div>
      <div style={tooltipStyle} {...tooltipProps.tooltip.a11yProps}>
        <div
          style={tooltipProps.tooltipContent.styles}
          {...tooltipProps.tooltipContent.a11yProps}
        >
          Sample tooltip text goes here.
          <span style={tooltipProps.tooltipContent.styles['&::after']} />
        </div>
        <span style={tooltipProps.tooltip.styles['&::after']} />
      </div>
    </div>
  )
}

export default function Tooltip({ logJS }) {
  useEffect(() => {
    if (logJS) {
      console.log(
        getJSTooltipProps({
          id: 'tooltipJS-id',
        })
      )
    }
  }, [logJS])

  return (
    <div id="tooltip">
      <h2>Tooltips</h2>

      <h3>CSS</h3>
      <SimpleGrid cols="3">
        {positions.map((position) => (
          <div key={position}>
            <TooltipEl id={`tooltip:${position}`} position={position}>
              {position}
            </TooltipEl>
          </div>
        ))}
      </SimpleGrid>

      <h3>JS</h3>
      <SimpleGrid cols="3">
        {positions.map((position) => (
          <div key={position}>
            <TooltipJS id={`tooltip:${position}`} position={position}>
              {position}
            </TooltipJS>
          </div>
        ))}
      </SimpleGrid>
    </div>
  )
}

import type { PopoverOptions, TooltipOptions } from '../../../types'

export function getTooltipClasses(
  options: Required<TooltipOptions> | Required<PopoverOptions>
) {
  return {
    contentPositionClass: `${options.position}PandoPositionContent` as const,
    positionClass: `${options.position}PandoPosition` as const,
  }
}

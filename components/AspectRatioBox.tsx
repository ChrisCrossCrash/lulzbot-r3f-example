import { CSSProperties } from 'react'

type AspectRatioBoxProps = {
  children: React.ReactNode
  /** A number between 0 and 1 */
  ratio: number
  /** What to do when the content overflows the allocated space.
   *
   * `'hidden'`: Hide the overflowing content (this is the default).
   *
   * `'scroll'`: Make the content scrollable, so the hidden content can be reached.
   *
   * `'visible'`: Overflow the content to the page.
   * The aspect ratio will be lost for the content, but not the container.
   */
  overflowY?: 'hidden' | 'scroll' | 'visible'
  /** If `true`, gives the container a dashed red outline and sets `z-index: 1`. */
  debug?: boolean
}

/** Wrap child elements in a container with a fixed aspect ratio.
 * Child elements automatically fill the container.
 *
 * Here is a useful article describing how it works:
 * https://css-tricks.com/aspect-ratio-boxes/ */
export const AspectRatioBox = (props: AspectRatioBoxProps) => {
  const paddingTop = 100 * props.ratio + '%'

  const outerDivStyles: CSSProperties = {
    height: 0,
    position: 'relative',
    overflowY: props.overflowY ?? 'hidden',
    outline: props.debug ? '3px dashed red' : 'none',
    zIndex: props.debug ? 1 : 'auto',
    paddingTop,
  }

  const innerDivStyles: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }

  return (
    <div className='ck-aspect-ratio-box' style={outerDivStyles}>
      <div style={innerDivStyles}>{props.children}</div>
    </div>
  )
}

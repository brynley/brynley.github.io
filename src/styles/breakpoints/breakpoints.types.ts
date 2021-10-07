export type BreakpointKeys = 'tablet' | 'laptop' | 'desktop'

export type Breakpoints = {
  [key in BreakpointKeys]: number
}
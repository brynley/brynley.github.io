import { FlattenSimpleInterpolation } from 'styled-components'
import { BreakpointKeys } from '@styles/breakpoints/breakpoints.types'

export type MediaQueries = {
  [key in BreakpointKeys]: (styles: FlattenSimpleInterpolation) => FlattenSimpleInterpolation
}
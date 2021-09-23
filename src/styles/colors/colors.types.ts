export type ColorKeys =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'monochrome1'
  | 'monochrome2'
  | 'monochrome3'
  | 'monochrome4'
  | 'monochrome5'

export type Colors = {
  [key in ColorKeys]: string
}
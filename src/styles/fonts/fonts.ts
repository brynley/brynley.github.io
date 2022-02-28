import { css } from 'styled-components'

const extension = '.ttf'

const primaryFontFiles = [
  {
    weight: 400,
    file: 'OpenSans-Regular'
  },
  {
    weight: 500,
    file: 'OpenSans-SemiBold'
  },
  {
    weight: 600,
    file: 'OpenSans-Bold'
  },
  {
    weight: 700,
    file: 'OpenSans-ExtraBold'
  },
  {
    weight: 700,
    file: 'OpenSans-ExtraBoldItalic',
    fontStyle: 'italic'
  },
]

const secondaryFontFiles = [
  {
    weight: 400,
    file: 'DMSerifDisplay-Regular',
  },
]

const fonts = css`
  ${primaryFontFiles.map((font) => {
    return css`
      @font-face {
        font-family: OpenSans;
        src: local('${font.file}'),
          url('assets/fonts/${font.file}${extension}') format('truetype');
        font-weight: ${font.weight};
        ${font.fontStyle && css`
          font-style: ${font.fontStyle};
        `}
      }
    `
  })}
  ${secondaryFontFiles.map((font) => {
    return css`
      @font-face {
        font-family: DMSerifDisplay;
        src: local('${font.file}'),
          url('assets/fonts/${font.file}${extension}') format('truetype');
        font-weight: ${font.weight};
      }
    `
  })}
`

export default fonts

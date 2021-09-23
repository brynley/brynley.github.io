import { css } from 'styled-components'

const extension = '.ttf'

const fontFiles = [
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
]

const fonts = css`
  ${fontFiles.map((font) => {
    return css`
      @font-face {
        font-family: OpenSans;
        src: local('${font.file}'),
          url('asset/fonts/${font.file}${extension}') format('${extension}');
        font-weight: ${font.weight};
      }
    `
  })}
`

export default fonts

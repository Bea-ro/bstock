import { styled } from 'styled-components'

export const TitleStyled = styled.h3<{
  size?: string
  color?: string
  align?: string
}>`
  font-size: ${(props) => props.size || '1.6875em'};
  color: ${(props) => props.color};
  align-self: ${(props) => props.align || 'center'};
  font-weight: 700;
`

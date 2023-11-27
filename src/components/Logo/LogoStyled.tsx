import styled from 'styled-components'

export const LogoStyled = styled.h1<{ size: string; color?: string }>`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color || 'var(--color-primary)'};
  font-weight: 700;
`

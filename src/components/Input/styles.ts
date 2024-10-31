import styled from 'styled-components'

export const StyledInput = styled.input`
  padding: calc(0.75rem - 1px) calc(1rem - 1px);

  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;

  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.blue};
  }
`

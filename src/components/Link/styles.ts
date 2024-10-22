import styled from 'styled-components'

export const StyledLink = styled.a`
  width: fit-content;
  color: ${(props) => props.theme.blue};

  text-transform: uppercase;
  font-weight: 700;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  text-decoration: none;

  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.blue};
  }
`

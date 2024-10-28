import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 18.5rem;
  position: relative;

  background: linear-gradient(#0b1b2b 20%, #3294f8 250%);

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  position: absolute;

  top: 4rem;
  left: 50%;
  transform: translate(-50%, 0);
`

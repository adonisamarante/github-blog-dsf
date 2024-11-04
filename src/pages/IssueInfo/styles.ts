import { styled } from 'styled-components'

export const Container = styled.div`
  width: 54rem;
  padding-bottom: 3.5rem;

  display: flex;
  flex-direction: column;
`

export const IssueTitleWrapper = styled.div`
  width: 100%;
  min-height: 10.05rem;

  padding: 2rem 2rem 2rem 2.5rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};

  margin-top: -5.5rem;
  z-index: 99;

  display: flex;
  flex-direction: column;

  > span {
    // ButtonsWrapper height made distance higher than the specified in Figma
    margin-top: calc(1.25rem - 0.4rem);

    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    line-height: 130%;
    font-weight: 700;
  }
`

export const ButtonsWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: start;

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme.blue};

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const ProfileLinksContainer = styled.div`
  width: 100%;

  display: flex;
  gap: 1.5rem;
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-top: 0.5rem;

  :first-child {
    color: ${(props) => props.theme['base-label']};
  }
`

import styled from 'styled-components'

export const Containter = styled.div`
  width: 54rem;

  display: flex;
  flex-direction: column;

  position: relative;
`

export const ProfileWrapper = styled.div`
  width: 100%;
  min-height: 13.25rem;

  padding: 2rem 2rem 2rem 2.5rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};

  position: absolute;
  top: -5.5rem;

  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;

    background-color: ${(props) => props.theme['base-text']};
  }
`

export const ProfileInfo = styled.div`
  flex: 1;

  margin-top: 0.5rem;

  display: flex;
  flex-direction: column;

  > :first-child {
    display: flex;
    justify-content: space-between;
    align-items: start;

    span {
      font-size: 1.5rem;
      line-height: 130%;
      font-weight: 700;
    }
  }
`

export const ProfileDescription = styled.span`
  margin-top: 0.5rem;
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

  margin-top: 1.5rem;

  :first-child {
    color: ${(props) => props.theme['base-label']};
  }
`

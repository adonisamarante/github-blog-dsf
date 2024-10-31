import styled from 'styled-components'

export const Containter = styled.div`
  width: 54rem;
  padding-bottom: 3.5rem;

  display: flex;
  flex-direction: column;
`

export const ProfileWrapper = styled.div`
  width: 100%;
  min-height: 13.25rem;

  padding: 2rem 2rem 2rem 2.5rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};

  margin-top: -5.5rem;
  z-index: 99;

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

export const SearchWrapper = styled.div`
  margin-top: 4.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;

    :first-child {
      font-size: 1.125rem;
      font-weight: 700;
    }

    :last-child {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const CardsGrid = styled.div`
  margin-top: 3rem;

  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
`

import styled from 'styled-components'

export const Container = styled.div`
  width: 26rem;
  height: 16.25rem;

  background-color: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  &:hover {
    cursor: pointer;
    padding: calc(2rem - 2px);
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const TitleWrapper = styled.div`
  max-height: 4rem;

  display: flex;
  justify-content: space-between;
  gap: 1rem;

  :first-child {
    flex: 1;
    flex-wrap: wrap;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
  }

  :last-child {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const DescriptionWrapper = styled.span`
  max-height: 7rem;
  overflow: hidden;
  flex-wrap: wrap;
`

import styled from 'styled-components'

export const Container = styled.div`
  width: calc(26rem - 2px);
  height: calc(16.25rem - 2px);

  background-color: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;

  border: 2px solid ${(props) => props.theme['base-post']};
  transition: border-color 0.2s;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  &:hover {
    cursor: pointer;
    border-color: ${(props) => props.theme['base-label']};
  }
`

export const TitleWrapper = styled.div`
  max-height: 4rem;

  display: flex;
  justify-content: space-between;
  gap: 1rem;

  :first-child {
    flex: 1;
    max-width: 17.687rem;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};

    // for multiline text ellipsis to work
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  :last-child {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
    text-transform: capitalize;
  }
`

export const DescriptionWrapper = styled.span`
  max-height: 7rem;

  // for multiline text ellipsis to work
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

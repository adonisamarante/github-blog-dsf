import { IIssue } from '../../interfaces/issue'
import { Container, DescriptionWrapper, TitleWrapper } from './styles'

interface ICardProps {
  issue: IIssue
  onClick: () => void
}

export function Card({ issue, onClick }: ICardProps) {
  return (
    <Container onClick={onClick}>
      <TitleWrapper>
        <p>{issue.title}</p>
        <p>Ha 1 dia</p>
      </TitleWrapper>

      <DescriptionWrapper>{issue.body}</DescriptionWrapper>
    </Container>
  )
}

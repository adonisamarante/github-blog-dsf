import { Container, DescriptionWrapper, TitleWrapper } from './styles'

interface IIssue {
  id: number
  title: string
  date: string
  description: string
}

interface ICardProps {
  issue: IIssue
  onClick: () => void
}

export function Card({ issue, onClick }: ICardProps) {
  return (
    <Container onClick={onClick}>
      <TitleWrapper>
        <p>{issue.title}</p>
        <p>{issue.date}</p>
      </TitleWrapper>

      <DescriptionWrapper>{issue.description}</DescriptionWrapper>
    </Container>
  )
}

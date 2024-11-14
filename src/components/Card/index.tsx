import { ptBR } from 'date-fns/locale'
import { formatDistanceToNow } from 'date-fns'
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
        <p>
          {formatDistanceToNow(new Date(issue.createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </p>
      </TitleWrapper>

      <DescriptionWrapper>{issue.body}</DescriptionWrapper>
    </Container>
  )
}

import { Link } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  ButtonsWrapper,
  Container,
  IssueTitleWrapper,
  LinkWrapper,
  ProfileLinksContainer,
} from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { IIssue } from '../../interfaces/issue'

export function IssueInfo() {
  const location = useLocation()
  const navigate = useNavigate()

  const issue: IIssue = location.state

  function handleReturnPage() {
    navigate(-1)
  }

  return (
    <Container>
      <IssueTitleWrapper>
        <ButtonsWrapper>
          <button onClick={handleReturnPage}>
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </button>
          <Link title="Ver no Github" url="" />
        </ButtonsWrapper>

        <span>{issue.title}</span>

        <ProfileLinksContainer>
          <LinkWrapper>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <span>cameronwll {issue.id}</span>
          </LinkWrapper>
          <LinkWrapper>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </LinkWrapper>
          <LinkWrapper>
            <FontAwesomeIcon icon={faComment} size="sm" />
            <span>5 comentários</span>
          </LinkWrapper>
        </ProfileLinksContainer>
      </IssueTitleWrapper>

      <div>
        <span>{issue.description}</span>
      </div>
    </Container>
  )
}

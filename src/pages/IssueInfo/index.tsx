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
import { useNavigate, useParams } from 'react-router-dom'

export function IssueInfo() {
  const navigate = useNavigate()
  const { issueId } = useParams()

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

        <span>{issueId}</span>

        <ProfileLinksContainer>
          <LinkWrapper>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <span>cameronwll {issueId}</span>
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
        <span>{issueId}</span>
      </div>
    </Container>
  )
}

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

export function IssueInfo() {
  return (
    <Container>
      <IssueTitleWrapper>
        <ButtonsWrapper>
          <span>
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </span>
          <Link title="Ver no Github" url="" />
        </ButtonsWrapper>

        <span>JavaScript data types and data structures</span>

        <ProfileLinksContainer>
          <LinkWrapper>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <span>cameronwll</span>
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
        <span>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types: let foo = 42; // foo is now a number
          foo = &apos;bar&apos;; // foo is now a string foo = true; // foo is
          now a boolean
        </span>
      </div>
    </Container>
  )
}

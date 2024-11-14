// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Link } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  ButtonsWrapper,
  Container,
  IssueTitleWrapper,
  LinkWrapper,
  MarkdownWrapper,
  ProfileLinksContainer,
} from './styles'
import { useNavigate, useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { IIssue } from '../../interfaces/issue'
import { api } from '../../lib/axios'
import Markdown from 'react-markdown'

export function IssueInfo() {
  const [issue, setIssue] = useState<IIssue>()
  const navigate = useNavigate()
  const { issueId } = useParams()

  function handleReturnPage() {
    navigate(-1)
  }

  const fetchIssue = useCallback(async () => {
    const response = await api.get(
      `repos/rocketseat-education/reactjs-github-blog-challenge/issues/${issueId}`,
    )

    const issueResponse = response.data

    await setIssue({
      id: issueResponse.id,
      title: issueResponse.title,
      body: issueResponse.body,
      createdAt: issueResponse.created_at,
      htmlURL: issueResponse.html_url,
      comments: issueResponse.comments,
      user: {
        login: issueResponse.user.login,
      },
    })
  }, [])

  useEffect(() => {
    fetchIssue()
  }, [])

  return (
    <Container>
      <IssueTitleWrapper>
        <ButtonsWrapper>
          <button onClick={handleReturnPage}>
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </button>
          <Link title="Ver no Github" url={issue?.htmlURL} />
        </ButtonsWrapper>

        <span>{issue?.title}</span>

        <ProfileLinksContainer>
          <LinkWrapper>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <span>{issue?.user.login}</span>
          </LinkWrapper>
          <LinkWrapper>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>
              {issue?.createdAt &&
                formatDistanceToNow(new Date(issue?.createdAt), {
                  addSuffix: true,
                  locale: ptBR,
                })}
            </span>
          </LinkWrapper>
          <LinkWrapper>
            <FontAwesomeIcon icon={faComment} size="sm" />
            <span>
              {issue?.comments}{' '}
              {issue?.comments === 1 ? 'comentário' : 'comentários'}
            </span>
          </LinkWrapper>
        </ProfileLinksContainer>
      </IssueTitleWrapper>

      <MarkdownWrapper>
        <Markdown>{issue?.body}</Markdown>
      </MarkdownWrapper>
    </Container>
  )
}

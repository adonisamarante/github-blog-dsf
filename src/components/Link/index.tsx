import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import { StyledLink } from './styles'

interface ILinkProps {
  title: string
  url: string
}

export function Link({ title, url }: ILinkProps) {
  return (
    <StyledLink href={url}>
      {title}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
    </StyledLink>
  )
}

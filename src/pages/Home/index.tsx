import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Card, Input, Link } from '../../components'
import {
  CardsGrid,
  Container,
  LinkWrapper,
  ProfileDescription,
  ProfileInfo,
  ProfileLinksContainer,
  ProfileWrapper,
  SearchWrapper,
} from './styles'
import IssuesMock from '../../mocks/Issues.json'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()

  function handleNavigateIssuePage() {
    navigate('/issue-info')
  }

  return (
    <Container>
      <ProfileWrapper>
        <img src="" alt="" />
        <ProfileInfo>
          <div>
            <span>Cameron Williamson</span>
            <Link title="GITHUB" url="https://github.com/adonisamarante" />
          </div>

          <ProfileDescription>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </ProfileDescription>

          <ProfileLinksContainer>
            <LinkWrapper>
              <FontAwesomeIcon icon={faGithub} size="lg" />
              <span>cameronwll</span>
            </LinkWrapper>
            <LinkWrapper>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Rocketseat</span>
            </LinkWrapper>
            <LinkWrapper>
              <FontAwesomeIcon icon={faUserGroup} size="sm" />
              <span>32 seguidores</span>
            </LinkWrapper>
          </ProfileLinksContainer>
        </ProfileInfo>
      </ProfileWrapper>

      <SearchWrapper>
        <div>
          <span>Publicações</span>
          <span>6 publicações</span>
        </div>
        <Input />
      </SearchWrapper>

      <CardsGrid>
        {IssuesMock.data.map((item) => {
          console.log(item)
          return (
            <Card
              key={item.id}
              issue={item}
              onClick={handleNavigateIssuePage}
            />
          )
        })}
      </CardsGrid>
    </Container>
  )
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Card, Input, Link } from '../../components'
import {
  CardsGrid,
  Containter,
  LinkWrapper,
  ProfileDescription,
  ProfileInfo,
  ProfileLinksContainer,
  ProfileWrapper,
  SearchWrapper,
} from './styles'

export function Home() {
  return (
    <Containter>
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsGrid>
    </Containter>
  )
}

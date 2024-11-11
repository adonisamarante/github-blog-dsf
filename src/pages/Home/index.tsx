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
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface IUser {
  name: string
  bio: string
  login: string
  avatarUrl: string
  htmlUrl: string
  followers: string
}

export function Home() {
  const [userInfo, setUserInfo] = useState<IUser>()
  const navigate = useNavigate()

  const fetchUser = useCallback(async () => {
    const response = await api.get('users/rocketseat-education')

    await setUserInfo({
      name: response.data.name,
      bio: response.data.bio,
      login: response.data.login,
      avatarUrl: response.data.avatar_url,
      htmlUrl: response.data.html_url,
      followers: response.data.followers,
    })
  }, [])

  function handleNavigateIssuePage(issueId: number) {
    navigate(`/issue-info/${issueId}`)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <Container>
      <ProfileWrapper>
        <img src={userInfo?.avatarUrl} alt="" />
        <ProfileInfo>
          <div>
            <span>{userInfo?.name}</span>
            <Link title="GITHUB" url={userInfo ? userInfo.htmlUrl : ''} />
          </div>

          <ProfileDescription>{userInfo?.bio}</ProfileDescription>

          <ProfileLinksContainer>
            <LinkWrapper>
              <FontAwesomeIcon icon={faGithub} size="lg" />
              <span>{userInfo?.login}</span>
            </LinkWrapper>
            <LinkWrapper>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Rocketseat</span>
            </LinkWrapper>
            <LinkWrapper>
              <FontAwesomeIcon icon={faUserGroup} size="sm" />
              <span>{userInfo?.followers} seguidores</span>
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
          return (
            <Card
              key={item.id}
              issue={item}
              onClick={() => handleNavigateIssuePage(item.id)}
            />
          )
        })}
      </CardsGrid>
    </Container>
  )
}

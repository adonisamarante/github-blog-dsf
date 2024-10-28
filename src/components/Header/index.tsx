import LogoImg from '../../assets/logo.svg'
import LeftLinesImg from '../../assets/effect-left.svg'
import RightLinesImg from '../../assets/effect-right.svg'
import { Container, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <img src={LeftLinesImg} alt="" />
      <Logo src={LogoImg} alt="" />
      <img src={RightLinesImg} alt="" />
    </Container>
  )
}

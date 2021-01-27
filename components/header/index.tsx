import React from 'react'
import { HeaderArea, Logo, User } from './styles'
const Header: React.FC = () => {
  return (
    <HeaderArea>
      <Logo>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" />
      </Logo>
      <User>
        <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" />
      </User>
    </HeaderArea>
  )
}
export default Header

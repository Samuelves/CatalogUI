import styled from 'styled-components'

export const HeaderArea = styled.header`
  position: fixed;
  z-index: 999;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: #141414;
  transition: all ease 0.5s;
`
export const Logo = styled.div`
  height: 25px;
  img {
    height: 100%;
  }
`
export const User = styled.div`
  height: 35px;
  img {
    height: 100%;
    border-radius: 3px;
  }
`

import styled from 'styled-components'

export const CatalogRowDiv = styled.div`
  margin-bottom: 30px;
`
export const Title = styled.h2`
  margin: 0px 0px 0px 30px;
`
export const CatalogRowLeft = styled.div`
  left: 0;
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.2s;
`
export const CatalogRowRight = styled.div`
  right: 0;
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.2s;
`
export const CatalogRowListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`
export const CatalogRowList = styled.div`
  transition: all ease 0.2s;
`
export const CatalogRowItem = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;
  img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
  }
  img:hover {
    transform: scale(1);
  }
`

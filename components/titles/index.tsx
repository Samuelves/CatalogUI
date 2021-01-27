import React, { useState } from 'react'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import {
  CatalogRowDiv,
  Title,
  CatalogRowLeft,
  CatalogRowRight,
  CatalogRowListArea,
  CatalogRowList,
  CatalogRowItem
} from './styles'
interface ISection {
  title: string
  items: Array<{ results: [] }>
}
interface Props {
  listmovie: ISection
}

const CatalogRow: React.FC<Props> = ({ listmovie }) => {
  const [scrollX, setScrollX] = useState(0)

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }
    setScrollX(x)
  }
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    const listW = listmovie.items.results.length * 150
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60
    }
    setScrollX(x)
  }
  return (
    <CatalogRowDiv>
      <Title>{listmovie.title}</Title>
      <CatalogRowLeft onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </CatalogRowLeft>
      <CatalogRowRight onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </CatalogRowRight>

      <CatalogRowListArea>
        <CatalogRowList
          style={{
            marginLeft: scrollX,
            width: listmovie.items.results.length * 150
          }}
        >
          {listmovie.items.results.length > 0 &&
            listmovie.items.results.map((item, key) => (
              <CatalogRowItem key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                />
              </CatalogRowItem>
            ))}
        </CatalogRowList>
      </CatalogRowListArea>
    </CatalogRowDiv>
  )
}
export default CatalogRow

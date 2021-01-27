import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import { Lists } from '../styles/pages/Home'
import { HomeList, getMovieInfo } from '../services/movieapi'
import CatalogRow from '../components/titles'
const Home: React.FC = () => {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setblackHeader] = useState(false)
  useEffect(() => {
    const loadAll = async () => {
      const list = await HomeList()
      setMovieList(list)
      const originals = list.filter(i => i.slug === 'originals')
      const randonChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      )
      const chosen = originals[0].items.results[randonChosen]
      const chosenInfo = await getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
    }
    loadAll()
  }, [])
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setblackHeader(true)
      } else {
        setblackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])
  return (
    <div>
      <Header />
      <Lists>
        {movieList.map(listmovie => (
          <CatalogRow key="listmovie.slug" listmovie={listmovie} />
        ))}
      </Lists>
    </div>
  )
}

export default Home

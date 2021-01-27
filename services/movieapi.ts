import axios, { AxiosResponse } from 'axios'

export const basicFecth = async (link: string): Promise<T> => {
  return (await fetch(`https://api.themoviedb.org/3${link}`)).json()
}

export const HomeList = async (): Promise<T> => {
  return [
    {
      slug: 'originals',
      title: 'Originais do Netflix',
      items: await basicFecth(
        `/discover/tv/?with_network=213&language=pt-BR&api_key=${process.env.API_KEY}`
      )
    },
    {
      slug: 'trending',
      title: 'Recomendados para Você',
      items: await basicFecth(
        `/trending/all/week?language=pt-BR&api_key=${process.env.API_KEY}`
      )
    },
    {
      slug: 'toprated',
      title: 'Em Alta',
      items: await basicFecth(
        `/movie/top_rated?&language=pt-BR&api_key=${process.env.API_KEY}`
      )
    },
    {
      slug: 'action',
      title: 'Ação',
      items: await basicFecth(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${process.env.API_KEY}`
      )
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: await basicFecth(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${process.env.API_KEY}`
      )
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: await basicFecth(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${process.env.API_KEY}`
      )
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await basicFecth(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${process.env.API_KEY}`
      )
    },
    {
      slug: 'documentary',
      title: 'Documentários',
      items: await basicFecth(
        `/discover/movie?with_genres=99&language=pt-BR&api_key=${process.env.API_KEY}`
      )
    }
  ]
}

export const getMovieInfo = async (
  movieId: string,
  type: string
): Promise<T> => {
  let info = {}
  try {
    type === 'movie'
      ? (info = await basicFecth(
          `/movie/${movieId}?language=pt-BR&api_key=${process.env.API_KEY}`
        ))
      : (info = await basicFecth(
          `/tv/${movieId}?language=pt-BR&api_key=${process.env.API_KEY}`
        ))
  } catch {
    info = null
  }
  return info
}

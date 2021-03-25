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
        `/discover/tv/?with_network=213&language=pt-BR&api_key=${process.env.API_KEY_MOVIE}`
      )
    },
    {
      slug: 'trending',
      title: 'Recomendados para Você',
      items: await basicFecth(
        `/trending/all/week?language=pt-BR&api_key=${process.env.API_KEYY_MOVIE}`
      )
    },
    {
      slug: 'toprated',
      title: 'Em Alta',
      items: await basicFecth(
        `/movie/top_rated?&language=pt-BR&api_key=${process.env.API_KEYY_MOVIE}`
      )
    },
    {
      slug: 'action',
      title: 'Ação',
      items: await basicFecth(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${process.env.API_KEYY_MOVIE}`
      )
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: await basicFecth(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${process.env.API_KEYY_MOVIE}`
      )
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: await basicFecth(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${process.env.API_KEYY_MOVIE}`
      )
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await basicFecth(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${process.env.API_KEYY_MOVIE}`
      )
    },
    {
      slug: 'documentary',
      title: 'Documentários',
      items: await basicFecth(
        `/discover/movie?with_genres=99&language=pt-BR&api_key=${process.env.API_KEYY_MOVIE}`
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
          `/movie/${movieId}?language=pt-BR&api_key=${process.env.API_KEYY_MOVIE}`
        ))
      : (info = await basicFecth(
          `/tv/${movieId}?language=pt-BR&api_key=${process.env.API_KEYY_MOVIE}`
        ))
  } catch {
    info = null
  }
  return info
}

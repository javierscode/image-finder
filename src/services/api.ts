import { photoMapper } from '../helpers/mappers'
import type { PhotoResponse, SearchResponse } from '../types/api'
import { SearchPhotoResult } from '../types/photo'

const BASE_URL = 'https://api.unsplash.com'
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY

export async function getRandomPhoto() {
  const response = await fetch(
    `${BASE_URL}/photos/random?client_id=${ACCESS_KEY}`
  )

  const data = (await response.json()) as PhotoResponse

  const photo = photoMapper(data)

  return photo
}

export async function getListOfPhotos(page = 1) {
  const response = await fetch(
    `${BASE_URL}/photos/?page=${page}&client_id=${ACCESS_KEY}`
  )
  const data = (await response.json()) as Array<PhotoResponse>

  const listOfPhotos = data.map(photoMapper)

  return listOfPhotos
}

export async function searchPhotosByQuery(query: string, page = 1) {
  const response = await fetch(
    `${BASE_URL}/search/photos/?query=${query}&page=${page}&client_id=${ACCESS_KEY}`
  )
  const data = (await response.json()) as SearchResponse

  const result: SearchPhotoResult = {
    total: data.total,
    totalPages: data.total_pages,
    results: data.results.map(photoMapper),
  }

  return result
}

import { PhotoResponse } from '../types/api'
import { Photo } from '../types/photo'

export function photoMapper(photo: PhotoResponse) {
  const photoToReturn: Photo = {
    id: photo.id,
    createdAt: photo.created_at,
    width: photo.width,
    height: photo.height,
    description: photo.description,
    url: photo.links.download,
    likes: photo.likes,
  }

  return photoToReturn
}

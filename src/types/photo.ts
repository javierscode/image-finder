export interface Photo {
  id: string
  createdAt: string
  width: number
  height: number
  description: string
  url: string
  likes: number
}

export interface SearchPhotoResult {
  total: number
  totalPages: number
  results: Array<Photo>
}

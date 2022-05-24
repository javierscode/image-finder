export interface SearchResponse {
  total: number
  total_pages: number
  results: Array<PhotoResponse>
}

export interface PhotoResponse {
  id: string
  created_at: string
  updated_at: string
  promoted_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  description: string
  alt_description: null
  urls: string
  links: PhotoResponseLinks
  categories: Array<any>
  likes: number
  liked_by_user: boolean
  current_user_collections: string
  sponsorship: null
  topic_submissions: string
  user: UserResponse
}

export interface PhotoResponseLinks {
  self: string
  html: string
  download: string
  download_location: string
}

export interface UserResponse {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: null
  portfolio_url: string
  bio: string
  location: string
  links: UserResponseLinks
  profile_image: ProfileResponseImage
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: SocialResponse
}

export interface UserResponseLinks {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

export interface ProfileResponseImage {
  small: string
  medium: string
  large: string
}

export interface SocialResponse {
  instagram_username: string
  portfolio_url: string
  twitter_username: null
  paypal_email: null
}

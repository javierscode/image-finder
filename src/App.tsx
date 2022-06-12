import { useEffect, useState } from 'react'
import './App.css'
import { getListOfPhotos } from './services/api'
import type { Photo } from './types/photo'

function App() {
  const [images, setImages] = useState<Photo[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getListOfPhotos(currentPage).then(setImages)
  }, [currentPage])

  const nextPage = () => {
    setCurrentPage(current => current + 1)
  }

  const previousPage = () => {
    setCurrentPage(current => current - 1)
  }

  return (
    <div className='container'>
      <div className='grid'>
        {images.map(image => {
          const backgroundImage = `url("${image.url}")`
          return (
            <picture
              key={image.id}
              className='grid-item'
              style={{ backgroundImage }}
              title={image.description}
              onLoad={() => console.log('Imagen cargada')}
            ></picture>
          )
        })}
      </div>
      <div className='buttons-wrapper'>
        <button disabled={currentPage === 1} onClick={previousPage}>
          -
        </button>
        <span>{currentPage}</span>
        <button onClick={nextPage}>+</button>
      </div>
    </div>
  )
}

export default App

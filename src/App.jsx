import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from './components/ImageModal/ImageModal'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import toast, { Toaster } from 'react-hot-toast'
import './App.css'

const App = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [images, setImages] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [page, setPage] = useState(1)
	const [selectedImage, setSelectedImage] = useState(null)

	const accessKey = 'h36YM3Kf4YnUe8UZg8nnJSaW43Ij0Y2cKgugtGkJTgk'
	const apiUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&page=${page}&client_id=${accessKey}`

	useEffect(() => {
		const fetchImages = async () => {
			try {
				setLoading(true)
				const response = await axios.get(apiUrl)
				setImages(prevImages =>
					page === 1
						? response.data.results
						: [...prevImages, ...response.data.results]
				)
			} catch (error) {
				setError('Error fetching images. Please try again.')
			} finally {
				setLoading(false)
			}
		}

		if (searchTerm) {
			fetchImages()
		}
	}, [searchTerm, page, apiUrl])

	const handleSearch = value => {
		if (!value.trim()) {
			toast.error('Please enter a search term')
			return
		}

		setSearchTerm(value)
		setPage(1)
		setImages([])
		setError(null)
	}

	const handleLoadMore = () => {
		setPage(prevPage => prevPage + 1)
	}

	const openModal = image => {
		setSelectedImage(image)
	}

	const closeModal = () => {
		setSelectedImage(null)
	}

	return (
		<div>
			<SearchBar onSubmit={handleSearch} />
			{loading && <Loader />}
			{error && <ErrorMessage message={error} />}
			{images.length > 0 && (
				<ImageGallery images={images} onImageClick={openModal} />
			)}
			{images.length > 0 && <LoadMoreBtn onLoadMore={handleLoadMore} />}
			{selectedImage && (
				<ImageModal image={selectedImage} onClose={closeModal} />
			)}
			<Toaster />
		</div>
	)
}

export default App

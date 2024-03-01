import ImageCard from '../ImageCard/ImageCard'

const ImageGallery = ({ images, onImageClick }) => {
	return (
		<ul>
			{images.map(image => (
				<ImageCard
					key={image.id}
					image={image}
					onClick={() => onImageClick(image)}
				/>
			))}
		</ul>
	)
}

export default ImageGallery

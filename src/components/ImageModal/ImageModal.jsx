// import Modal from "react-modal"

// const ImageModal = ({ isOpen,image, onClose }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       contentLabel="Image Modal"
//       className="modal"
//       overlayClassName="overlay"
//     >
//       <div>
//         <img src="{image.urls.regular}" alt={image.alt_description} />
//       </div>
//     </Modal>
//   );
// };

// export default ImageModal

import Modal from 'react-modal'
import style from './ImageModal.module.css'

const ImageModal = ({ isOpen, image, onClose }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			shouldCloseOnEsc={true}
			shouldCloseOnOverlayClick={true}
			contentLabel='Image Modal'
			className={style.modal}
			overlayClassName={style.overlay}
		>
			<div>
				{image && (
					<img src={image.urls.regular} alt={image.alt_description} className={style.img} />
				)}
			</div>
		</Modal>
	)
}

export default ImageModal

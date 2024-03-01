import Modal from "react-modal"

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div>
        <img src="{image.urls.regular}" alt={image.alt_description} />
      </div>
    </Modal>
  );
};

export default ImageModal
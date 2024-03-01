const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className="load-more-btn" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn
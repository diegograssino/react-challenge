const IconButton = ({ src, onClick = () => {} }) => {
  return (
    <button className="icon-button" onClick={onClick}>
      <div className="icon-button__image-container">
        <img src={src} />
      </div>
    </button>
  );
};

export default IconButton;

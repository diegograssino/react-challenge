const IconButton = ({ src }) => {
  return (
    <button className="menu-button">
      <div className="menu-button__image-container">
        <img src={src} />
      </div>
    </button>
  );
};

export default IconButton;

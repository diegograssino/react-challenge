const IconButton = ({ variant = "primary", src, onClick = () => {} }) => {
  return (
    <button className={`icon-button--${variant}`} onClick={onClick}>
      <div className={`icon-button__image-container--${variant}`}>
        <img src={src} />
      </div>
    </button>
  );
};

export default IconButton;

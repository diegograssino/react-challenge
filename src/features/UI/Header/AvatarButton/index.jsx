const AvatarButton = ({ onClick = () => {} }) => {
  return (
    <button className="avatar-button" onClick={onClick}>
      <img src="/assets/UI/header/michael.png" />
    </button>
  );
};

export default AvatarButton;

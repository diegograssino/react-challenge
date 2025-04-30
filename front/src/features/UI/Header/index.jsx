import { useNavigate } from "react-router";
import Title from "../Title";
import AvatarButton from "./AvatarButton";
import IconButton from "./IconButton";

export { default as AvatarButton } from "./AvatarButton";
export { default as IconButton } from "./IconButton";

const Header = ({ location }) => {
  let navigate = useNavigate();

  const handleBack = () => navigate(-1);

  const handleDots = () => {
    alert("Dots clicked");
  };

  const handleMenu = () => {
    alert("Menu clicked");
  };

  const handleUser = () => {
    alert("User avatar clicked");
  };

  const renderHeaderContent = (location) => {
    switch (location) {
      case "product-detail":
        return (
          <>
            <IconButton
              src="/assets/UI/header/icon-back.svg"
              onClick={handleBack}
            />
            <Title variant="tertiary" as="h2">
              Detail
            </Title>
            <IconButton
              src="/assets/UI/header/icon-dots.svg"
              onClick={handleDots}
            />
          </>
        );
      default:
        return (
          <>
            <IconButton
              src="/assets/UI/header/icon-menu.svg"
              onClick={handleMenu}
            />
            <AvatarButton onClick={handleUser} />
          </>
        );
    }
  };

  return <header className="header">{renderHeaderContent(location)}</header>;
};
export default Header;

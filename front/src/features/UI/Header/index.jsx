import { useNavigate } from "react-router";
import Title from "../Title";
import AvatarButton from "./AvatarButton";
import IconButton from "./IconButton";

export { default as AvatarButton } from "./AvatarButton";
export { default as IconButton } from "./IconButton";

const Header = ({ location }) => {
  let navigate = useNavigate();

  const handleBack = () => navigate(-1);

  const renderHeaderContent = (location) => {
    switch (location) {
      case "product-list":
        return (
          <>
            <IconButton src="/public/assets/UI/header/icon-menu.svg" />
            <AvatarButton />
          </>
        );
      case "product-detail":
        return (
          <>
            <IconButton
              src="/public/assets/UI/header/icon-back.svg"
              onClick={handleBack}
            />
            <Title variant="tertiary" as="h2">
              Detail
            </Title>
            <IconButton src="/public/assets/UI/header/icon-dots.svg" />
          </>
        );
      default:
        return null;
    }
  };

  return <header className="header">{renderHeaderContent(location)}</header>;
};
export default Header;

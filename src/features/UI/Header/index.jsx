import { Popover } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import Body from "../Body";
import Title from "../Title";
import AvatarButton from "./AvatarButton";
import IconButton from "./IconButton";

export { default as AvatarButton } from "./AvatarButton";
export { default as IconButton } from "./IconButton";

const Header = ({ location }) => {
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBack = () => navigate(-1);

  const renderHeaderContent = (location) => {
    switch (location) {
      case "product-detail":
        return (
          <>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Body as="p" variant="quaternary" className="header__popover">
                Feature not available!
              </Body>
            </Popover>
            <IconButton
              src="/assets/UI/icons/icon-back.svg"
              onClick={handleBack}
            />
            <Title variant="tertiary" as="h2">
              Detail
            </Title>
            <IconButton
              aria-describedby={id}
              onClick={handleClick}
              src="/assets/UI/icons/icon-dots.svg"
            />
          </>
        );
      default:
        return (
          <>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Body as="p" variant="quaternary" className="header__popover">
                Feature not available!
              </Body>
            </Popover>
            <IconButton
              aria-describedby={id}
              onClick={handleClick}
              src="/assets/UI/icons/icon-menu.svg"
            />
            <AvatarButton aria-describedby={id} onClick={handleClick} />
          </>
        );
    }
  };

  return <header className="header">{renderHeaderContent(location)}</header>;
};
export default Header;

import Body from "../Body";

const MobileFrame = ({ children }) => {
  return (
    <div className="mobile-frame__container">
      <Body as="p" variant="secondary">
        Mobile Frame
      </Body>
      <div className="mobile-frame__content">{children}</div>
    </div>
  );
};

export default MobileFrame;

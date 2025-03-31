import Body from "../Body";

const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <Body variant="nonary" as="p">
        {children}
      </Body>
    </button>
  );
};

export default Button;

const Body = ({ children, as, variant }) => {
  const Tag = as || "p";

  return <Tag className={`body--${variant}`}>{children}</Tag>;
};

export default Body;

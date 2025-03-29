const Title = ({ children, as, variant }) => {
  const Tag = as || "h1";

  return <Tag className={`title--${variant}`}>{children}</Tag>;
};

export default Title;

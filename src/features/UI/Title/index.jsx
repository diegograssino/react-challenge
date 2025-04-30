const Title = ({ children, as, variant, centered = false }) => {
  const Tag = as || "h1";

  return (
    <div className={centered ? "title--centered-container" : ""}>
      <Tag className={`title--${variant}`}>{children}</Tag>
    </div>
  );
};

export default Title;

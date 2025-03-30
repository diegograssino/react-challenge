const Body = ({ children, as, variant, centered = false }) => {
  const Tag = as || "p";

  return (
    <div className={centered ? "body--centered-container" : ""}>
      <Tag className={`body--${variant}`}>{children}</Tag>
    </div>
  );
};

export default Body;

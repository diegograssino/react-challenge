const Title = ({ children, as, variant = "primary" }) => {
  let Tag;
  const asOptions = ["h1", "h2", "h3", "h4", "h5", "h6"];
  if (asOptions.includes(as)) {
    Tag = as;
  } else {
    Tag = "h1";
  }

  return <Tag className={`title--${variant}`}>{children}</Tag>;
};

export default Title;

export const getSlug = (id, brand) => {
  const slugify = (str) => str.toLowerCase().replace(/\s+/g, "-");

  return `/products/${id}-${slugify(brand)}`;
};

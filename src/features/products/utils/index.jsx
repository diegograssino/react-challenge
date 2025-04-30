export const getSlug = (id, brand) => {
  const slugify = (str) => str.toLowerCase().replace(/\s+/g, "-");

  return `/products/${id}-${slugify(brand)}`;
};

export const getIdFromSlug = (slug) => {
  const id = Number(slug.split("-")[0]);

  return id;
};

export const getPrice = (cents) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
};

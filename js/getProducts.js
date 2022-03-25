export function getProduct() {
  const storedProducts = localStorage.getItem("products");

  if (!storedProducts) {
    return [];
  }
  return JSON.parse(storedProducts);
}

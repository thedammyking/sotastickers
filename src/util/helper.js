function findItemIndex(cart, productId) {
  return cart.findIndex((value, index) => value.productId === productId);
}

export { findItemIndex };

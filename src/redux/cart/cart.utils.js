export const addItemToCart = (cartItems, catrItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === catrItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === catrItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...catrItemToAdd, quantity: 1 }];
};

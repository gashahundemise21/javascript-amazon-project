export const cart = [];

export function addToCart(productId){
  const quantitySelector = parseInt(
        document.querySelector(`.js-quantity-selector-${productId}`).value,
        10
      );

      // Find if item already exists in cart
      let matchingItem;
      cart.forEach((item) => {
        if(item.id === productId){
          matchingItem = item;
        }
      });

      if (matchingItem) {
        // Add the selected quantity instead of just 1
        matchingItem.quantity += quantitySelector;
      } 
      else {
        cart.push({
          id: productId,
          quantity: quantitySelector
        });
      }

}

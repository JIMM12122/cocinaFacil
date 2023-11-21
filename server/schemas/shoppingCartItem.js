// schemas/shoppingCartItem.js
import { MdShoppingCart } from 'react-icons/md';
export default {
    name: 'shoppingCartItem',
    title: 'Shopping Cart Item',
    type: 'document',
    icon: MdShoppingCart,
    fields: [
      {
        name: 'cart',
        type: 'reference',
        title: 'Shopping Cart',
        to: [{ type: 'shoppingCart' }],
      },
      {
        name: 'dish',
        type: 'reference',
        title: 'Dish',
        to: [{ type: 'dish' }],
      },
      {
        name: 'quantity',
        type: 'number',
        title: 'Quantity',
      },
      {
        name: 'subtotal',
        type: 'number',
        title: 'Subtotal',
      },
    ]
  }
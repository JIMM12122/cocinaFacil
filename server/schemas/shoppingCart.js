// schemas/shoppingCart.js
import { MdShoppingCart } from 'react-icons/md';

export default {
  name: 'shoppingCart',
  title: 'Shopping Cart',
  type: 'document',
  icon: MdShoppingCart,
  fields: [
   
    {
      name: 'customer',
      type: 'reference',
      title: 'Customer',
      to: [{ type: 'Customer' }],
    },
    {
      name: 'created_at',
      type: 'datetime',
      title: 'Created At',
    },
    {
        name: 'status',
        type: 'string',
        title: 'Status',
        options: {
            list: [
            { title: 'Active', value: 'active' },
            { title: 'Innactive', value: 'innactive' },
            ],
        },
    },
    {
        name: 'ID', // Utilizando 'ID' con mayúsculas
        type: 'number',
        title: 'ID',
      }
  ]
}

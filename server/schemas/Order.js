import {defineField, defineType} from 'sanity'
import { MdShoppingCart } from 'react-icons/md';

export default {
    name: 'order',
  title: 'Order',
  type: 'document',
  icon: MdShoppingCart,
  fields: [
    {
        name : 'orderNumber',
        type: 'number',
        title: 'Número de orden',
        validation: (rule) => rule.required(),
    },
    {
      name: 'customer',
      type: 'reference',
      title: 'Cliente',
      to: [{ type: 'Customer' }],
    },

    {
      name: 'dish',
      type: 'array',
      title: 'Platillos en el pedido',
      of: [{ type: 'reference', to: [{ type: 'dish' }] }],
    },
    {
      name: 'totalAmount',
      type: 'number',
      title: 'Monto total del pedido',
    },
    {
      name: 'orderDate',
      type: 'datetime',
      title: 'Fecha del pedido',
    },
    {
        name: 'status',
        type: 'string',
        title: 'Estado del pedido',
        options: {
            list: [
            { title: 'En espera', value: 'pending' },
            { title: 'En proceso', value: 'inProgress' },
            { title: 'Entregado', value: 'delivered' },
            ],
        },
        },
        {
        name: 'deliveryAddress',
        type: 'string',
        title: 'Dirección de entrega',
        }

  ]
}
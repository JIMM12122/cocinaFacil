// import {defineField, defineType} from 'sanity'
import { MdPerson, MdShoppingCart } from 'react-icons/md';

export default {
    name: 'Customer',
    title: 'Customers',
    type: 'document',
    icon: MdPerson,
    fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Nombre del cliente',
          validation: (rule) => rule.required(),
        },
        {
          name: 'email',
          type: 'email',
          title: 'Correo electrónico',
          validation: (rule) => rule.required(),
        },
        {
          name: 'phone',
          type: 'string',
          title: 'Teléfono',
        },
        {
            name: 'address',
            type: 'string',
            title: 'Dirección',
            },
            {
            name: 'orders',
            type: 'array',
            title: 'Órdenes',
            of: [{ type: 'reference', to: [{ type: 'order' }] }],
            },
            {
            name: 'paymentMethods',
            type: 'array',
            title: 'Métodos de pago',
            of: [{ type: 'reference', to: [{ type: 'paymentMethods' }] }],
            },
        
    ]
}
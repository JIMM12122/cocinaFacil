// schemas/paymentMethod.js

import { MdPayment } from 'react-icons/md'; 

export default {
  name: 'paymentMethods',
  title: 'Payment Method',
  type: 'document',
  icon: MdPayment,

  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Nombre del método de pago',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brebe descripcion del método de pago',
    },
    {
      name: 'isOnlinePayment',
      title: 'Online Payment',
      type: 'boolean',
      description: 'Es un metodo de pago para transacciones en linea?',
    },
  ]
}

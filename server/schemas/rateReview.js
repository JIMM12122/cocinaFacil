// schemas/rating.js

import { MdRateReview } from 'react-icons/md';

export default {
  name: 'rating',
  title: 'RatingReview',
  type: 'document',
  icon: MdRateReview,
  fields: [
    {
      name: 'id',
      title: 'ID de Valoración',
      type: 'number',
    },
    {
      name: 'dish',
      title: 'Platillo',
      type: 'reference',
      to: [{ type: 'dish' }],
    },
    {
      name: 'customer',
      title: 'Cliente',
      type: 'reference',
      to: [{ type: 'Customer' }],
    },
    {
      name: 'rating',
      title: 'Calificación',
      type: 'number',
      validation: (rule) => rule.min(1).max(5),
    },
    {
      name: 'comment',
      title: 'Comentario',
      type: 'text',
    },
    {
      name: 'date',
      title: 'Fecha de la valoración',
      type: 'datetime',
    },
  ],
};

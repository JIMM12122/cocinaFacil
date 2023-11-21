import {defineField, defineType} from 'sanity'
import { MdCategory, MdFoodBank } from 'react-icons/md';

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  icon: MdFoodBank,
  fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Nombre del platillo',
        validation: rule=> rule.required(),
    },
    {
        name: 'description',
        type: 'string',
        title: 'Descripción',
        validation: rule=> rule.max(200),
    },
    {
      name: 'image', 
      type: 'image',
      title: 'Imagen del platillo'
    },
    {
      name: 'price',
      title: 'Precio del platillo en colones',
      type: 'number'
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Categoría',
      to: [{ type: 'category' }],
    }
  ]
})

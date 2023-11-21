import {defineField, defineType} from 'sanity'
import { MdCategory, MdShoppingCart } from 'react-icons/md';

export default defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: MdCategory,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre de la categoria',
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
      title: 'imagen de la categoria',
   },
   {
      name: 'dishes',
      type: 'array',
      title: 'Platillos en la categoria',
      of: [{ type: 'reference', to: [{ type: 'dish' }] }],
   }
  ],
})

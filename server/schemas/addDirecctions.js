// En un archivo como schema.js
import { MdCategory, MdShoppingCart } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'addDirecctions',
    title: 'Dirección',
    type: 'document',
    icon: MdCategory,
    fields: [
      {
        name: 'direction',
        type: 'string',
        title: 'Dirección exacta',
        validation: rule => rule.required(),
        },
        {
        name: 'canton',
        type: 'string',
        title: 'Canton',
        validation: rule => rule.required(),
        },
        {
        name: 'district',
        type: 'string',
        title: 'Distrito',
        validation: rule => rule.required(),
        },
        {
        name: 'province',
            
        type: 'string',
        title: 'Provincia',
        validation: rule => rule.required(),
        },
        
    ],
  })
  

export default {
    title: 'Furniture Category',
    name: 'furnitureCategory',
    type: 'document',
    fields: [
      {
        title: 'Name',
        name: 'name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        title: 'Type',
        name: 'type',
        type: 'string',
        options: {
          list: [
            { title: 'Chair', value: 'chair' },
            { title: 'Table', value: 'table' },
            { title: 'Other Furniture', value: 'other' }
          ],
          layout: 'radio'
        },
        validation: Rule => Rule.required()
      }
    ]
  }
  
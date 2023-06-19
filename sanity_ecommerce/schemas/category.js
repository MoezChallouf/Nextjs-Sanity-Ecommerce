
export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    // Other fields in your category schema
    {
      name: 'furniture',
      title: 'Furniture',
      type: 'reference',
      to: [{ type: 'furnitureCategory' }]
    }
  ]
}

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Resource Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'resourceType',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal Service', value: 'internal' },
          { title: 'External Link', value: 'external' },
          { title: 'Partner Organization', value: 'partner' },
          { title: 'Emergency Contact', value: 'emergency' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'Education', value: 'education' },
          { title: 'Legal Aid', value: 'legal' },
          { title: 'Financial Support', value: 'financial' },
          { title: 'Emergency Services', value: 'emergency' },
          { title: 'Counseling', value: 'counseling' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'External link (for external resources)',
    }),
    defineField({
      name: 'contactInformation',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'email',
        },
        {
          name: 'address',
          title: 'Address',
          type: 'text',
        },
      ],
    }),
    defineField({
      name: 'isEmergencyContact',
      title: 'Emergency Contact',
      type: 'boolean',
      description: 'Highlight this as an emergency contact on the Find Support page',
      initialValue: false,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 0,
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Show this resource on the Find Support page',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      resourceType: 'resourceType',
      category: 'category',
      isEmergency: 'isEmergencyContact',
    },
    prepare({ title, resourceType, category, isEmergency }) {
      return {
        title,
        subtitle: `${resourceType || ''}${category ? ` • ${category}` : ''}${isEmergency ? ' • EMERGENCY' : ''}`,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{ field: 'displayOrder', direction: 'asc' }],
    },
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [{ field: 'category', direction: 'asc' }],
    },
  ],
})



import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'supportMethod',
  title: 'Support Method',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon / Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Support Category',
      type: 'string',
      options: {
        list: [
          { title: 'Fund Us (Donate)', value: 'donate' },
          { title: 'Lend Your Voice (Advocacy)', value: 'advocacy' },
          { title: 'Support Our Project', value: 'project' },
          { title: 'Collaborate', value: 'collaborate' },
          { title: 'Buy Our Products (Instagram)', value: 'shop' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'actionUrl',
      title: 'Action URL',
      type: 'url',
      description: 'URL for the call-to-action button',
    }),
    defineField({
      name: 'ctaText',
      title: 'Call-to-Action Text',
      type: 'string',
      description: 'Button text (e.g., "Donate Now", "Learn More")',
      initialValue: 'Learn More',
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
      description: 'Show this support method on the Ways to Support page',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'icon',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{ field: 'displayOrder', direction: 'asc' }],
    },
  ],
})



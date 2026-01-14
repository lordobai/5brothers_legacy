import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'organizationName',
      title: 'Organization Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
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
    }),
    defineField({
      name: 'partnerType',
      title: 'Partner Type',
      type: 'string',
      options: {
        list: [
          { title: 'Corporate', value: 'corporate' },
          { title: 'NGO', value: 'ngo' },
          { title: 'Government', value: 'government' },
          { title: 'Foundation', value: 'foundation' },
          { title: 'Academic Institution', value: 'academic' },
          { title: 'Individual', value: 'individual' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'partnershipCategory',
      title: 'Partnership Category',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Financial Support', value: 'financial' },
          { title: 'Program Implementation', value: 'program' },
          { title: 'Technical Support', value: 'technical' },
          { title: 'Advocacy', value: 'advocacy' },
          { title: 'Research', value: 'research' },
          { title: 'Volunteer Support', value: 'volunteer' },
        ],
      },
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
      title: 'Active Partner',
      type: 'boolean',
      description: 'Show this partner on the partners page',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'organizationName',
      subtitle: 'partnerType',
      media: 'logo',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{ field: 'displayOrder', direction: 'asc' }],
    },
    {
      title: 'Name, A-Z',
      name: 'nameAsc',
      by: [{ field: 'organizationName', direction: 'asc' }],
    },
  ],
})



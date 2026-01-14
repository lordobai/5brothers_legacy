import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Position',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Leadership', value: 'leadership' },
          { title: 'Programs', value: 'programs' },
          { title: 'Operations', value: 'operations' },
          { title: 'Communications', value: 'communications' },
          { title: 'Finance', value: 'finance' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
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
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'email',
      title: 'Email (Public)',
      type: 'email',
      description: 'Optional public email address',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'socialLinks',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first on team page',
      initialValue: 0,
    }),
    defineField({
      name: 'displayOnTeamPage',
      title: 'Display on Team Page',
      type: 'boolean',
      description: 'Show this member on the team page',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      name: 'name',
      role: 'role',
      media: 'photo',
    },
    prepare({ name, role, media }) {
      return {
        title: name,
        subtitle: role,
        media,
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
      title: 'Name, A-Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
})



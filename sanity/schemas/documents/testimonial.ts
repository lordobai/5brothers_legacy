import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial / Impact Story',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Title',
      type: 'string',
    }),
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
      description: 'Optional organization name',
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
      name: 'quote',
      title: 'Quote / Story',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
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
      description: 'Optional image to accompany the testimonial',
    }),
    defineField({
      name: 'programAssociation',
      title: 'Related Program',
      type: 'reference',
      to: [{ type: 'program' }],
      description: 'Optional: Associate with a specific program',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Impact Story', value: 'impact-story' },
          { title: 'Testimonial', value: 'testimonial' },
          { title: 'Donor Story', value: 'donor-story' },
          { title: 'Beneficiary Story', value: 'beneficiary-story' },
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
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Published', value: 'published' },
        ],
      },
      initialValue: 'draft',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      role: 'role',
      organization: 'organization',
      media: 'photo',
    },
    prepare({ name, role, organization, media }) {
      return {
        title: name,
        subtitle: `${role || ''}${organization ? ` at ${organization}` : ''}`,
        media,
      }
    },
  },
})





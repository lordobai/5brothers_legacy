import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'program',
  title: 'Program / Initiative',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Program Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Program Category',
      type: 'string',
      options: {
        list: [
          { title: 'Education', value: 'education' },
          { title: 'Health & Nutrition', value: 'health' },
          { title: 'WASH (Water, Sanitation, Hygiene)', value: 'wash' },
          { title: 'Disaster Response', value: 'disaster' },
          { title: 'Youth Empowerment', value: 'youth' },
          { title: 'Advocacy & Policy Influence', value: 'advocacy' },
          { title: 'Monitoring & Evaluation', value: 'monitoring' },
        ],
      },
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
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            },
          ],
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
    }),
    defineField({
      name: 'impactMetrics',
      title: 'Impact Metrics',
      type: 'text',
      rows: 3,
      description: 'Key impact statistics (e.g., "1,000 students educated, 50 schools built")',
    }),
    defineField({
      name: 'subPrograms',
      title: 'Sub-Programs / Components',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of sub-programs or components within this initiative',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'relatedPrograms',
      title: 'Related Programs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'program' }],
        },
      ],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Planning', value: 'planning' },
          { title: 'Completed', value: 'completed' },
          { title: 'On Hold', value: 'on-hold' },
        ],
      },
      initialValue: 'active',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'featuredImage',
      status: 'status',
    },
    prepare({ title, category, media, status }) {
      return {
        title,
        subtitle: `${category || ''} [${status || 'active'}]`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [{ field: 'category', direction: 'asc' }],
    },
  ],
})





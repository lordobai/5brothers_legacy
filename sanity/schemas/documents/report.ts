import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'report',
  title: 'Report',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Report Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reportType',
      title: 'Report Type',
      type: 'string',
      options: {
        list: [
          { title: 'Annual Report', value: 'annual' },
          { title: 'Financial Report', value: 'financial' },
          { title: 'Audit Report', value: 'audit' },
          { title: 'Program Report', value: 'program' },
          { title: 'Impact Report', value: 'impact' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publicationDate',
      title: 'Publication Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
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
      name: 'executiveSummary',
      title: 'Executive Summary',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'downloadCount',
      title: 'Download Count',
      type: 'number',
      description: 'Auto-incremented when downloaded (read-only)',
      readOnly: true,
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
      title: 'title',
      reportType: 'reportType',
      publicationDate: 'publicationDate',
      media: 'thumbnail',
    },
    prepare({ title, reportType, publicationDate, media }) {
      const date = publicationDate ? new Date(publicationDate).getFullYear() : ''
      return {
        title,
        subtitle: `${reportType || ''}${date ? ` • ${date}` : ''}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Publication Date, Newest',
      name: 'publicationDateDesc',
      by: [{ field: 'publicationDate', direction: 'desc' }],
    },
    {
      title: 'Report Type',
      name: 'reportTypeAsc',
      by: [{ field: 'reportType', direction: 'asc' }],
    },
  ],
})




import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'socialLinks',
  title: 'Social Media Links',
  type: 'object',
  fields: [
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter/X URL',
      type: 'url',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
    }),
  ],
})





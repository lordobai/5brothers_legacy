import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
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
      name: 'eventStart',
      title: 'Event Start Date & Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventEnd',
      title: 'Event End Date & Time',
      type: 'datetime',
    }),
    defineField({
      name: 'timezone',
      title: 'Timezone',
      type: 'string',
      description: 'e.g., Africa/Lagos, UTC',
      initialValue: 'Africa/Lagos',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'venue',
          title: 'Venue Name',
          type: 'string',
        },
        {
          name: 'address',
          title: 'Address',
          type: 'string',
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
        },
        {
          name: 'country',
          title: 'Country',
          type: 'string',
        },
        {
          name: 'isOnline',
          title: 'Online Event',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'onlineLink',
          title: 'Online Event Link (if online)',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Workshop', value: 'workshop' },
          { title: 'Conference', value: 'conference' },
          { title: 'Webinar', value: 'webinar' },
          { title: 'Fundraiser', value: 'fundraiser' },
          { title: 'Community Event', value: 'community-event' },
          { title: 'Training', value: 'training' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
    }),
    defineField({
      name: 'organizer',
      title: 'Organizer',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Event Content',
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
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Past', value: 'past' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
      initialValue: 'upcoming',
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
      eventStart: 'eventStart',
      location: 'location.venue',
      media: 'featuredImage',
      status: 'status',
    },
    prepare({ title, eventStart, location, media, status }) {
      const date = eventStart ? new Date(eventStart).toLocaleDateString() : ''
      return {
        title,
        subtitle: `${date}${location ? ` • ${location}` : ''} [${status || 'upcoming'}]`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Event Date, Soonest',
      name: 'eventStartAsc',
      by: [{ field: 'eventStart', direction: 'asc' }],
    },
    {
      title: 'Event Date, Latest',
      name: 'eventStartDesc',
      by: [{ field: 'eventStart', direction: 'desc' }],
    },
  ],
})





import {defineType, defineField} from 'sanity'

export const upcomingEvent = defineType({
  name: 'upcomingEvent',
  title: 'Upcoming Event',
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
      type: 'text',
      description: 'A brief summary of the event.',
    }),
    defineField({
      name: 'mainImage',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Registration URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
  ],
})
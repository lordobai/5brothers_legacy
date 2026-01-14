import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

// Import schemas
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: '5brothers-legacy',
  title: '5Brothers Legacy Initiative CMS',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'u1tu4f9f',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  basePath: '/admin',
  
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Single items
            S.listItem()
              .title('Site Settings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            
            S.divider(),
            
            // Content types
            S.listItem()
              .title('Blog Posts')
              .schemaType('post')
              .child(S.documentTypeList('post').title('Blog Posts')),
            
            S.listItem()
              .title('Events')
              .schemaType('event')
              .child(S.documentTypeList('event').title('Events')),
            
            S.listItem()
              .title('Team Members')
              .schemaType('teamMember')
              .child(S.documentTypeList('teamMember').title('Team Members')),
            
            S.listItem()
              .title('Partners')
              .schemaType('partner')
              .child(S.documentTypeList('partner').title('Partners')),
            
            S.listItem()
              .title('Programs')
              .schemaType('program')
              .child(S.documentTypeList('program').title('Programs & Initiatives')),
            
            S.listItem()
              .title('Reports')
              .schemaType('report')
              .child(S.documentTypeList('report').title('Reports')),
            
            S.listItem()
              .title('Pages')
              .schemaType('page')
              .child(S.documentTypeList('page').title('Pages')),
            
            S.listItem()
              .title('Testimonials')
              .schemaType('testimonial')
              .child(S.documentTypeList('testimonial').title('Testimonials')),
            
            S.listItem()
              .title('Support Methods')
              .schemaType('supportMethod')
              .child(S.documentTypeList('supportMethod').title('Support Methods')),
            
            S.listItem()
              .title('Resources')
              .schemaType('resource')
              .child(S.documentTypeList('resource').title('Resources')),
          ]),
    }),
    visionTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
})


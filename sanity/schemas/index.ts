import post from './documents/post'
import event from './documents/event'
import teamMember from './documents/teamMember'
import partner from './documents/partner'
import program from './documents/program'
import report from './documents/report'
import page from './documents/page'
import testimonial from './documents/testimonial'
import supportMethod from './documents/supportMethod'
import resource from './documents/resource'

// Objects
import seo from './objects/seo'
import imageWithAlt from './objects/imageWithAlt'
import socialLinks from './objects/socialLinks'

// Singletons
import siteSettings from './singleton/siteSettings'

export const schemaTypes = [
  // Documents
  post,
  event,
  teamMember,
  partner,
  program,
  report,
  page,
  testimonial,
  supportMethod,
  resource,
  
  // Objects
  seo,
  imageWithAlt,
  socialLinks,
  
  // Singletons
  siteSettings,
]




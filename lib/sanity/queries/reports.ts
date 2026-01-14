import { groq } from 'next-sanity'

// Get all published reports
export const reportsQuery = groq`*[_type == "report" && status == "published"] | order(publicationDate desc) {
  _id,
  title,
  reportType,
  publicationDate,
  pdfFile {
    asset->{
      _id,
      url,
      originalFilename,
      size
    }
  },
  thumbnail,
  executiveSummary,
  downloadCount
}`

// Get reports by type
export const reportsByTypeQuery = groq`*[_type == "report" && status == "published" && reportType == $type] | order(publicationDate desc) {
  _id,
  title,
  reportType,
  publicationDate,
  pdfFile {
    asset->{
      _id,
      url,
      originalFilename,
      size
    }
  },
  thumbnail,
  downloadCount
}`



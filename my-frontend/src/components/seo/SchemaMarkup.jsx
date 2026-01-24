const BASE_URL = 'https://www.drbanu-begen.com'

export function generateMedicalConditionSchema(disease, serviceSlug) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: disease.title,
    alternateName: disease.subtitle,
    description: disease.definition?.content,
    signOrSymptom: disease.symptoms?.items?.map(symptom => ({
      '@type': 'MedicalSignOrSymptom',
      name: symptom
    })),
    possibleTreatment: disease.treatment?.options?.map(option => ({
      '@type': 'MedicalTherapy',
      name: option.name,
      description: option.description
    })),
    medicalSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Otolaryngology'
    }
  }
}

export function generateFAQSchema(faqs) {
  if (!faqs || faqs.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url ? `${BASE_URL}${crumb.url}` : undefined
    }))
  }
}

export function generateDiseasePageSchema(disease, serviceSlug, breadcrumbs) {
  const schemas = []

  // MedicalCondition schema
  schemas.push(generateMedicalConditionSchema(disease, serviceSlug))

  // FAQ schema
  const faqSchema = generateFAQSchema(disease.faq)
  if (faqSchema) {
    schemas.push(faqSchema)
  }

  // Breadcrumb schema
  if (breadcrumbs) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs))
  }

  // Physician schema (always include for trust)
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Op. Dr. Banu Begen',
    medicalSpecialty: 'Otolaryngology',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karsiyaka',
      addressRegion: 'Izmir',
      addressCountry: 'TR'
    },
    url: BASE_URL
  })

  return schemas
}

export default {
  generateMedicalConditionSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateDiseasePageSchema
}

import SEOHead from '../seo/SEOHead'
import { generateDiseasePageSchema } from '../seo/SchemaMarkup'
import DiseaseHero from './DiseaseHero'
import DiseaseDefinition from './DiseaseDefinition'
import DiseaseSymptoms from './DiseaseSymptoms'
import DiseaseCauses from './DiseaseCauses'
import DiseaseDiagnosis from './DiseaseDiagnosis'
import DiseaseTreatment from './DiseaseTreatment'
import DiseaseWhyUs from './DiseaseWhyUs'
import DiseaseFAQ from './DiseaseFAQ'
import DiseaseRelated from './DiseaseRelated'
import DiseaseCTA from './DiseaseCTA'
import './DiseasePage.css'

function DiseasePage({ disease, service, allDiseases }) {
  const breadcrumbs = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Hizmetler', url: '/hizmetler' },
    { name: service?.title, url: `/hizmetler/${service?.slug}` },
    { name: disease.title }
  ]

  const schema = generateDiseasePageSchema(disease, service?.slug, breadcrumbs)

  return (
    <div className="disease-page">
      <SEOHead
        title={disease.seo?.title || `${disease.title} | Op. Dr. Banu Begen`}
        description={disease.seo?.description || disease.definition?.content?.slice(0, 160)}
        keywords={disease.seo?.keywords}
        canonical={`/hizmetler/${service?.slug}/${disease.slug}`}
        schema={schema}
      />

      <DiseaseHero
        disease={disease}
        service={service}
        breadcrumbs={breadcrumbs}
      />

      <DiseaseDefinition definition={disease.definition} />

      <DiseaseSymptoms symptoms={disease.symptoms} />

      <DiseaseCauses causes={disease.causes} />

      <DiseaseDiagnosis diagnosis={disease.diagnosis} />

      <DiseaseTreatment treatment={disease.treatment} />

      <DiseaseWhyUs whyChooseUs={disease.whyChooseUs} />

      <DiseaseFAQ faq={disease.faq} />

      <DiseaseRelated
        relatedDiseases={disease.relatedDiseases}
        serviceSlug={service?.slug}
        allDiseases={allDiseases}
      />

      <DiseaseCTA diseaseTitle={disease.title} />
    </div>
  )
}

export default DiseasePage

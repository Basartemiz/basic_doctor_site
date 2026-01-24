import { useEffect } from 'react'

const SITE_NAME = 'Op. Dr. Banu Begen'
const BASE_URL = 'https://www.drbanu-begen.com'

function SEOHead({
  title,
  description,
  keywords = [],
  canonical,
  schema,
  noindex = false,
  ogImage = '/images/og-default.jpg',
  ogType = 'website'
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : null

  // Handle JSON-LD schema injection
  useEffect(() => {
    if (schema) {
      const existingScript = document.querySelector('script[data-schema="disease"]')
      if (existingScript) {
        existingScript.remove()
      }

      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-schema', 'disease')
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)

      return () => {
        script.remove()
      }
    }
  }, [schema])

  return (
    <>
      {/* React 19 native document metadata - automatically hoisted to <head> */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={SITE_NAME} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={`${BASE_URL}${ogImage}`} />
      <meta property="og:locale" content="tr_TR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}${ogImage}`} />
    </>
  )
}

export default SEOHead

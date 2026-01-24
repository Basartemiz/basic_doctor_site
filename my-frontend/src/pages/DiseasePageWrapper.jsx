import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import DiseasePage from '../components/disease/DiseasePage'
import { loadDisease, loadAllDiseases, getServiceBySlug } from '../utils/diseaseLoader'
import services from '../data/services.json'
import './DiseasePageWrapper.css'

function DiseasePageWrapper() {
  const { serviceSlug, diseaseSlug } = useParams()
  const [disease, setDisease] = useState(null)
  const [allDiseases, setAllDiseases] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const service = getServiceBySlug(services, serviceSlug)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setError(false)

      try {
        const [diseaseData, allDiseasesData] = await Promise.all([
          loadDisease(serviceSlug, diseaseSlug),
          loadAllDiseases()
        ])

        if (!diseaseData) {
          setError(true)
        } else {
          setDisease(diseaseData)
          setAllDiseases(allDiseasesData)
        }
      } catch (err) {
        console.error('Error fetching disease data:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [serviceSlug, diseaseSlug])

  if (loading) {
    return (
      <div className="disease-loading">
        <div className="loading-spinner"></div>
        <p>Yukleniyor...</p>
      </div>
    )
  }

  if (error || !disease || !service) {
    return (
      <div className="disease-not-found">
        <div className="container">
          <div className="not-found-content">
            <div className="not-found-icon">
              <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
            </div>
            <h1>Sayfa Bulunamadi</h1>
            <p>Aradiginiz sayfa mevcut degil veya kaldirilmis olabilir.</p>
            <div className="not-found-actions">
              <Link to="/hizmetler" className="btn btn-primary">
                Hizmetlere Don
              </Link>
              <Link to="/" className="btn btn-outline">
                Ana Sayfa
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <DiseasePage
      disease={disease}
      service={service}
      allDiseases={allDiseases}
    />
  )
}

export default DiseasePageWrapper

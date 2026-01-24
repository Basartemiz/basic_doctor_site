// Disease data loader utility
// Dynamically imports disease JSON files based on service and disease slug

const diseaseModules = import.meta.glob('../data/diseases/**/*.json')

// Service slug to folder mapping
const serviceFolderMap = {
  'kbb-hastaliklari': 'kbb',
  'cerrahi-operasyonlar': 'cerrahi',
  'medikal-estetik': 'estetik'
}

export async function loadDisease(serviceSlug, diseaseSlug) {
  const folder = serviceFolderMap[serviceSlug]
  if (!folder) {
    return null
  }

  const path = `../data/diseases/${folder}/${diseaseSlug}.json`
  const loader = diseaseModules[path]

  if (!loader) {
    return null
  }

  try {
    const module = await loader()
    return module.default || module
  } catch (error) {
    console.error(`Error loading disease: ${serviceSlug}/${diseaseSlug}`, error)
    return null
  }
}

export async function loadAllDiseases() {
  const diseases = []

  for (const [path, loader] of Object.entries(diseaseModules)) {
    try {
      const module = await loader()
      const disease = module.default || module
      diseases.push(disease)
    } catch (error) {
      console.error(`Error loading disease from ${path}`, error)
    }
  }

  return diseases
}

export async function loadDiseasesByService(serviceSlug) {
  const folder = serviceFolderMap[serviceSlug]
  if (!folder) {
    return []
  }

  const diseases = []
  const prefix = `../data/diseases/${folder}/`

  for (const [path, loader] of Object.entries(diseaseModules)) {
    if (path.startsWith(prefix)) {
      try {
        const module = await loader()
        const disease = module.default || module
        diseases.push(disease)
      } catch (error) {
        console.error(`Error loading disease from ${path}`, error)
      }
    }
  }

  return diseases
}

// Get service info from services.json
export function getServiceBySlug(services, slug) {
  return Object.values(services).find(s => s.slug === slug)
}

export default {
  loadDisease,
  loadAllDiseases,
  loadDiseasesByService,
  getServiceBySlug
}
